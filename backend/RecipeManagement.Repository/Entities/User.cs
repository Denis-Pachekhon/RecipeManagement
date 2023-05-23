using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecipeManagement.Repository.Entities
{
    public class User : IdentityUser
    {
        public ICollection<Recipe> Recipes { get; set; }

    }
}
