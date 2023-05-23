using System;
using System.Collections.Generic;
using System.Text;

namespace RecipeManagement.Repository.Entities
{
    public class Ingredient
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public double Protein { get; set; }

        public double Fats { get; set; }

        public double Carbohydrates { get; set; }

        public double? Quantity { get; set; }
    }
}
