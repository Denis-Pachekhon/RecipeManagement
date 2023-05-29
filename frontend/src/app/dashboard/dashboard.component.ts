import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  recipes: Recipe[] = [];

  currentPage = 1;
  pageSize = 3; // Change this to control the number of recipes per page
  pages: number[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getAllUserRecipes().subscribe(
      data => {
        this.recipes = data;
        this.pages = Array(Math.ceil(this.recipes.length / this.pageSize)).fill(0).map((x, i) => i + 1);
      },
      error => {
        console.log('Error occurred: ', error);
      }
    );
  }

}
