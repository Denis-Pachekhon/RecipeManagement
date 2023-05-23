using AutoMapper;
using RecipeManagement.WebAPI.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeManagement.WebAPI.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<Domain.Models.RegisterViewModel, RegisterViewModel>().ReverseMap();

            CreateMap<Domain.Models.LoginViewModel, LoginViewModel>().ReverseMap();
        }
    }
}
