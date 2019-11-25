import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Router} from '@angular/router';
const httpOptions1 = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("token")
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private _baseUrl ="https://localhost:44370/accountservice";
  private _baseAdminUrl="https://localhost:44370/adminservice";
  
  private _registerUrl = this._baseUrl+"/register";
private _registerUrlm= this._baseUrl+"/register";
private _loginUrl= this._baseUrl+"/login";
private _loginUrlm=this._baseUrl+"/login";
private _loginUrla=this._baseUrl+"/login";
private _addCourseUrl = "https://localhost:44368/api/admin";
  constructor(private http:HttpClient,private _router:Router) { }
  registerUser(user)
  {
    return this.http.post<any>(this._registerUrl,user,httpOptions1)
  }
  registerMentor(user)
  {
    return this.http.post<any>(this._registerUrlm,user,httpOptions1)
  }
  loginUser(user)
  {
    return this.http.post<any>(this._loginUrl,user,httpOptions1)
  }
  loginMentor(user)
  {
    return this.http.post<any>(this._loginUrlm,user,httpOptions1)
  }
  loginAdmin(user)
  {
    console.log(user);
    return this.http.post<any>(this._loginUrla,user,httpOptions1)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('userEmail')
    this._router.navigate(['/'])
  }
  loggedInUserName() {
    return localStorage.getItem('userEmail')   
  }
  registerCourses(course) {
    return this.http.post<any>(this._addCourseUrl, course,httpOptions1)
  }
  public blockById(id) {
    return this.http
      .get(this._baseAdminUrl+"/blockunblock/" + id,httpOptions1)
      
  }
  
  public unBlockById(id) {
    return this.http
    .get(this._baseAdminUrl+"/blockunblock/" + id,httpOptions1)
    
  }
  loggedInMentorName() {
    return localStorage.getItem('mentorEmail')   
  }
  
}
