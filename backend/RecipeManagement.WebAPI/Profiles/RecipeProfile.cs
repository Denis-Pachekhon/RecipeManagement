using AutoMapper;
using RecipeManagement.WebAPI.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeManagement.WebAPI.Profiles
{
    public class RecipeProfile : Profile
    {
        public RecipeProfile()
        {
            CreateMap<Domain.Models.Recipe, Recipe>()
                .ForMember(dest => dest.Id, memberOptions: opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Title, memberOptions: opt => opt.MapFrom(src => src.Title))
                .ForMember(dest => dest.Description, memberOptions: opt => opt.MapFrom(src => src.Description))
                .ForMember(dest => dest.Ingredients, memberOptions: opt => opt.MapFrom(src => src.Ingredients))
                .ForMember(dest => dest.Calories, memberOptions: opt => opt.MapFrom(src => src.Calories))
                .ReverseMap();
        }
    }
}
