using RecipeManagement.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RecipeManagement.Repository.Abstractions
{
    public interface IRecipeRepository
    {
        Task<Recipe> GetRecipeAsync(int id);
        Task<List<Recipe>> GetAllRecipesAsync();
        Task<List<Recipe>> GetAllUserRecipesAsync(User user);
        Task AddRecipeAsync(Recipe recipe);
        Task UpdateRecipeAsync(Recipe recipe);
        Task DeleteRecipeAsync(int id);
        Task<double> CalculateCaloriesAsync(Recipe recipe);
    }
}
