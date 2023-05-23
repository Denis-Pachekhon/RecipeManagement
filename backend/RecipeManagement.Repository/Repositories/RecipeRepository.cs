﻿using Microsoft.EntityFrameworkCore;
using RecipeManagement.Repository.Abstractions;
using RecipeManagement.Repository.DB;
using RecipeManagement.Repository.Entities;
using System;
using System.Collections.Generic;
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

        public async Task<Recipe> AddRecipeAsync(Recipe recipe)
        {
            var calories = await CalculateCaloriesAsync(recipe);
            recipe.Calories = calories;

            await _context.Recipes.AddAsync(recipe);
            await _context.SaveChangesAsync();

            return recipe;
        }

        public async Task<Recipe> UpdateRecipeAsync(Recipe recipe)
        {
            var calories = await CalculateCaloriesAsync(recipe);
            recipe.Calories = calories;

            _context.Recipes.Update(recipe);
            await _context.SaveChangesAsync();

            return recipe;
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
    }
}
