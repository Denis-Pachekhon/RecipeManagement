using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using RecipeManagement.Domain.Services.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace RecipeManagement.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IngredientController : ControllerBase
    {

        private static readonly HttpClient client = new HttpClient();
        private readonly IIngredientService _ingredientService;
        private readonly IMapper _mapper;

        public IngredientController(IIngredientService ingredientService, IMapper mapper)
        {
            _ingredientService = ingredientService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult> GetAllRecipes()
        {
            return Ok(await _ingredientService.GetIngredientsAsync());
        }

        [HttpPost]
        public async Task<ActionResult> Post()
        {

            string appId = "c1fb1ea2";
            string appKey = "0551a45b895bd48f4593f41696a1da3d";

            var response = await client.GetStringAsync($"https://api.edamam.com/api/food-database/v2/parser?app_id={appId}&app_key={appKey}");

            var parsedResponse = JObject.Parse(response);
            // тут ви можете обробити відповідь, витягти потрібні дані і зберегти їх у вашій базі даних

            return Ok(parsedResponse); // тут ми просто повертаємо відповідь як є, але в реальному випадку ви б, можливо, хотіли повернути результат додавання до бази даних
        }
    }
}
