using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeManagement.WebAPI.Contracts
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
