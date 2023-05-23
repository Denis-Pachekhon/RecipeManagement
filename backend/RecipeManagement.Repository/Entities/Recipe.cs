using System;
using System.Collections.Generic;
using System.Text;

namespace RecipeManagement.Repository.Entities
{
    public class Recipe
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public User User { get; set; }

        public ICollection<Ingredient> Ingredients { get; set; } = new List<Ingredient>();

        public double Calories { get; set; }
    }
}
