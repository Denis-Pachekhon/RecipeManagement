﻿using RecipeManagement.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RecipeManagement.Domain.Services.Abstractions
{
    public interface IRecipeService
    {
        Task<Recipe> GetRecipeAsync(int id);
        Task<List<Recipe>> GetAllRecipesAsync();
        Task<Recipe> AddRecipeAsync(Recipe recipe, string userId);
        Task<Recipe> UpdateRecipeAsync(Recipe recipe);
        Task DeleteRecipeAsync(int id);
    }
}