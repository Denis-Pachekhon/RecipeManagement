using AutoMapper;
using Microsoft.AspNetCore.Identity;
using RecipeManagement.Domain.Models;
using RecipeManagement.Domain.Services.Abstractions;
using RecipeManagement.Repository.Abstractions;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RecipeManagement.Domain.Services
{
    public class RecipeService : IRecipeService
    {
        private readonly IRecipeRepository _recipeRepository;
        private readonly UserManager<Repository.Entities.User> _userManager;
        private readonly IMapper _mapper;

        public RecipeService(IRecipeRepository recipeRepository, UserManager<Repository.Entities.User> userManager, IMapper mapper)
        {
            _recipeRepository = recipeRepository;
            _userManager = userManager;
             _mapper = mapper;
        }

        public async Task<Recipe> GetRecipeAsync(int id)
        {
            var result = await _recipeRepository.GetRecipeAsync(id);
            return _mapper.Map<Recipe>(result); 
        }

        public async Task<List<Recipe>> GetAllRecipesAsync()
        {
            var result = await _recipeRepository.GetAllRecipesAsync();
            return _mapper.Map<List<Recipe>>(result);
        }

        public async Task<Recipe> AddRecipeAsync(Recipe recipe, string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                throw new InvalidOperationException("User not found");
            }

            recipe.User = user;

            var result = await _recipeRepository.AddRecipeAsync(_mapper.Map<Repository.Entities.Recipe>(recipe));
            return _mapper.Map<Recipe>(result);
        }

        public async Task<Recipe> UpdateRecipeAsync(Recipe recipe)
        {
            var result = await _recipeRepository.UpdateRecipeAsync(_mapper.Map<Repository.Entities.Recipe>(recipe));
            return _mapper.Map<Recipe>(result);
        }

        public async Task DeleteRecipeAsync(int id)
        {
            await _recipeRepository.DeleteRecipeAsync(id);
        }
    }
}
