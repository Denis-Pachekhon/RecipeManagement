import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Recipe } from './models/models';
import { RecipeService } from './recipe.service';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { HomeComponent } from './home/home.component';
// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'recipes', component: RecipesComponent },
//   { path: 'recipe/:id', component: RecipeDetailComponent },
//   { path: 'edit-recipe/:id', component: RecipeEditComponent },
//   { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // перенаправлення на '/recipes', якщо шлях пустий
// ];
const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'mycookbook', component: DashboardComponent },
  { path: 'recipe/add', component: RecipeAddComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
