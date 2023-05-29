using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeManagement.WebAPI.Contracts
{
    public class Recipe
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public List<Ingredient> Ingredients { get; set; } = new List<Ingredient>();

        public double Calories { get; set; }
    }
}
