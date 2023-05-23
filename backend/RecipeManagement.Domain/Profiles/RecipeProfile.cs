using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecipeManagement.Domain.Profiles
{
    public class RecipeProfile : Profile
    {
        public RecipeProfile()
        {
            CreateMap<Repository.Entities.Recipe, Models.Recipe>().ReverseMap();
        }
    }
}
