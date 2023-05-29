using Microsoft.EntityFrameworkCore;
using RecipeManagement.Repository.Abstractions;
using RecipeManagement.Repository.DB;
using RecipeManagement.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeManagement.Repository.Repositories
{
    public class RecipeRepository : IRecipeRepository
    {
        private readonly ApplicationDbContext _context;

        public RecipeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Recipe> GetRecipeAsync(int id)
        {
            return await _context.Recipes.FindAsync(id);
        }

        public async Task<List<Recipe>> GetAllRecipesAsync()
        {
            return await _context.Recipes.ToListAsync();
        }

        public async Task AddRecipeAsync(Recipe recipe)
        {
            var calories = await CalculateCaloriesAsync(recipe);
            recipe.Calories = calories;

            await _context.Recipes.AddAsync(recipe);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateRecipeAsync(Recipe recipe)
        {
            var recipeToUpdate = await _context.Recipes.FindAsync(recipe.Id);
            if (recipeToUpdate != null)
            {
                recipeToUpdate.Ingredients = recipe.Ingredients;
                recipeToUpdate.Title = recipe.Title;
                recipeToUpdate.Description = recipe.Description;
                var calories = await CalculateCaloriesAsync(recipeToUpdate);
                recipeToUpdate.Calories = calories;

                _context.Recipes.Update(recipeToUpdate);
                await _context.SaveChangesAsync();
            }
        }

        public async Task DeleteRecipeAsync(int id)
        {
            var recipe = await GetRecipeAsync(id);
            if (recipe != null)
            {
                _context.Recipes.Remove(recipe);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<double> CalculateCaloriesAsync(Recipe recipe)
        {
            // Calculate the calories based on the ingredients and their quantities
            double totalCalories = 0;

            foreach (var ingredient in recipe.Ingredients)
            {
                var dbIngredient = await _context.Ingredients.FindAsync(ingredient.Id);
                if (dbIngredient != null)
                {
                    totalCalories += (double)((dbIngredient.Protein * 4 + dbIngredient.Carbohydrates *  4 + dbIngredient.Fats * 9) * ingredient.Quantity);
                }
            }

            return totalCalories;
        }

        public async Task<List<Recipe>> GetAllUserRecipesAsync(User user)
        {
            return await _context.Recipes
                .Where(r => r.User == user)
                .Select(r => new Recipe 
                { 
                    Id = r.Id,
                    Title = r.Title,
                    Description = r.Description,
                    Calories = r.Calories,
                    Ingredients = r.Ingredients,
                    User = null
                }).ToListAsync();
        }
    }
}
