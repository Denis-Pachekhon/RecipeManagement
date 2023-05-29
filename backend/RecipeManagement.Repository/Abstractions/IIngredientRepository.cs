using System;
using System.Collections.Generic;
using System.Text;
using RecipeManagement.Repository.Entities;
using System.Threading.Tasks;

namespace RecipeManagement.Repository.Abstractions
{
    public interface IIngredientRepository
    {
        Task<List<Ingredient>> GetIngredientsAsync();
    }
}
