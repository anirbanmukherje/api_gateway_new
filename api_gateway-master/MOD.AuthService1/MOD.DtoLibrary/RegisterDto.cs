﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MOD.DtoLibrary
{
    public class RegisterDto
    {


        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "PASSWORD_MIN_LENGTH",
            MinimumLength = 6)]
        public string Password { get; set; }
        [Required]
        public int Role { get; set; }

        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }

        public bool Active { get; set; }
        public string PhoneNumber { get; set; }
        public string Skills { get; set; }
        public string  Experience { get; set; }

    }
}
