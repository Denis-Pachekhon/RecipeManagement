using System;
using System.Collections.Generic;
using RecipeManagement.Domain.Models;
using System.Text;
using System.Threading.Tasks;

namespace RecipeManagement.Domain.Services.Abstractions
{
    public interface IIngredientService
    {
        Task<List<Ingredient>> GetIngredientsAsync();
    }
}
