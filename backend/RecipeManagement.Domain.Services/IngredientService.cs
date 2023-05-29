using AutoMapper;
using RecipeManagement.Domain.Models;
using RecipeManagement.Domain.Services.Abstractions;
using RecipeManagement.Repository.Abstractions;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RecipeManagement.Domain.Services
{
    public class IngredientService : IIngredientService
    {
        private readonly IIngredientRepository _ingredientRepository;
        private readonly IMapper _mapper;

        public IngredientService(IIngredientRepository ingredientRepository, IMapper mapper)
        {
            _ingredientRepository = ingredientRepository;
            _mapper = mapper;
        }
        public async Task<List<Ingredient>> GetIngredientsAsync()
        {
            var result = await _ingredientRepository.GetIngredientsAsync();
            return _mapper.Map<List<Ingredient>>(result);
        }
    }
}
