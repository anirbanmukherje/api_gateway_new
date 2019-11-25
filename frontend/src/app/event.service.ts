import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions1 = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("token")
  })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {


  public _setCourse:any;
  public _setCourseData:any;

  private _baseAdminUrl="https://localhost:44370/adminservice";
  private _baseMentorUrl="https://localhost:44370/mentorservice";
  private _baseStudentUrl="https://localhost:44370/studentservice";
  private _baseCourseUrl="https://localhost:44370/courseservice";

  private _eventsUrl=this._baseCourseUrl;

  private _specialEventsUrl=this._baseStudentUrl+"/ListOfCourse/";
  private _mycourses=this._baseCourseUrl;
  private _coursesUrl = this._baseMentorUrl+"/ListOfCourseMentor/"
  private _updateCourseUrl =  this._baseAdminUrl+"/";
  private _deleteCourseUrl = this._baseAdminUrl+"/";
  private _getUserListUrlAdminFetch= this._baseAdminUrl+"/mentorsList";
  private _getStudentListUrlAdminFetch=this._baseAdminUrl+"/usersList";
  private _updateMentorUrl = this._baseMentorUrl+"/mentorProfile/";
  private _searchCourseUrl= this._baseCourseUrl+"/search/";
  private _mentorProfileUrl = this._baseMentorUrl+"/mentorProfile/";
  private _studentProfileUrl =  this._baseStudentUrl+"/studentProfile/";
  private _updateStudentUrl = this._baseStudentUrl+"/studentProfile/";
  private _getMentorListUrl = this._baseAdminUrl;
  private _specialEventsUrlAddCourse = this._baseStudentUrl;
  private _updateEnrolledCourseStudentUrl = this._baseStudentUrl+"/ChangeEnrolledCourseStatus/";
  private _updateEnrolledCourseMentorUrl =  this._baseMentorUrl+"/ChangeEnrolledCourseStatus/";
 

  constructor(private http:HttpClient) { }
  getEvents(){
    return this.http.get<any>(this._eventsUrl,httpOptions1)
  }
  getSpecialEvents(StudentEmail) {
    return this.http.get<any>(this._specialEventsUrl+StudentEmail,httpOptions1)
  }
  getCourses(){
    return this.http.get<any>(this._mycourses,httpOptions1) 
  }
  editCourses(editField,course) {
    return this.http.put<any>(this._updateCourseUrl+editField,course,httpOptions1)
  }
  deleteCourse(deleteField){
    return this.http.delete<any>(this._deleteCourseUrl+deleteField,httpOptions1)
  }
  setCourse(course){
    this._setCourse = course;
    
  }
  getCourses1(MentorEmail) {
    return this.http.get<any>(this._coursesUrl+MentorEmail,httpOptions1)
  }
  getCourse(){
    return (this._setCourse);
  }
  getusersListAdmin() {
    return this.http.get<any>(this._getUserListUrlAdminFetch,httpOptions1)
  }

  getstudentListAdmin() {
    return this.http.get<any>(this._getStudentListUrlAdminFetch,httpOptions1)
  }
  searchResult(searchField) {
    
    return this.http.get<any>(this._searchCourseUrl+searchField,httpOptions1);
  }
  
  editMentorDetails(mentorId,mentorUpdatedData) {
    return this.http.put<any>(this._updateMentorUrl+mentorId,mentorUpdatedData,httpOptions1)
  }
  getMentorDetails(mentorEmail){
    return this.http.get<any>(this._mentorProfileUrl+mentorEmail,httpOptions1)
  }

  editStudentDetails(studentId,studentUpdatedData) {
    return this.http.put<any>(this._updateStudentUrl+studentId,studentUpdatedData,httpOptions1)
  }
  getStudentDetails(studentEmail){
    return this.http.get<any>(this._studentProfileUrl+studentEmail,httpOptions1)
  }
  
  enrollCourse(user) {
    return this.http.post<any>(this._specialEventsUrlAddCourse,user,httpOptions1)
  }
  getMentorListDetails() {
    return this.http.get<any>(this._getMentorListUrl,httpOptions1)
  }
  updateEnrolledCourseStudent(updateCourseId,updateCourseUserName,course) {
    return this.http.put<any>(this._updateEnrolledCourseStudentUrl+updateCourseId+'/'+updateCourseUserName,course,httpOptions1)
  }
  updateEnrolledCourseMentor(updateCourseId,updateCourseUserName,course) {
    return this.http.put<any>(this._updateEnrolledCourseMentorUrl+updateCourseId+'/'+updateCourseUserName,course,httpOptions1)
  }

}

