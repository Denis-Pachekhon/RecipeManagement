﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace RecipeManagement.Domain.Models
{
    public class LoginViewModel
    {
        public string Email { get; set; }

        public string Password { get; set; }

    }
}
