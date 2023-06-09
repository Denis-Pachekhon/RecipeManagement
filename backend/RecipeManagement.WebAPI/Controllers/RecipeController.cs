﻿using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RecipeManagement.Domain.Services.Abstractions;
using RecipeManagement.WebAPI.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace RecipeManagement.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeService _recipeService;
        private readonly IMapper _mapper;

        public RecipeController(IRecipeService recipeService, IMapper mapper)
        {
            _recipeService = recipeService;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetRecipe(int id)
        {
            var recipe = await _recipeService.GetRecipeAsync(id);

            if (recipe == null)
            {
                return NotFound();
            }

            return Ok(recipe);
        }

        [HttpGet]
        public async Task<ActionResult> GetAllRecipes()
        {
            return Ok(await _recipeService.GetAllRecipesAsync());
        }

        [HttpGet("User")]
        public async Task<ActionResult> GetAllUserRecipes()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return Ok(await _recipeService.GetAllUserRecipesAsync(userId));
        }

        [HttpPost]
        public async Task<ActionResult> AddRecipe(Recipe recipe)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            await _recipeService.AddRecipeAsync(_mapper.Map<Domain.Models.Recipe>(recipe), userId);

            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> UpdateRecipe([FromBody]Recipe recipe)
        {
            await _recipeService.UpdateRecipeAsync(_mapper.Map<Domain.Models.Recipe>(recipe));

            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteRecipe(int id)
        {
            await _recipeService.DeleteRecipeAsync(id);

            return Ok();
        }
    }
}
