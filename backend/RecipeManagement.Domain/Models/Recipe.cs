using System.Collections.Generic;
using System.Text;

namespace RecipeManagement.Domain.Models
{
    public class Recipe
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public Repository.Entities.User User { get; set; }

        public ICollection<Ingredient> Ingredients { get; set; } = new List<Ingredient>();

        public double Calories { get; set; }
    }
}
