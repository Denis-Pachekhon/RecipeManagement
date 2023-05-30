import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/models';
import { Router } from '@angular/router';

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

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.recipeService.getAllUserRecipes().subscribe(
      data => {
        this.recipes = data;
        this.calculatePages();
      },
      error => {
        console.log('Error occurred: ', error);
      }
    );
  }

  calculatePages(): void {
    const totalPages = Math.ceil(this.recipes.length / this.pageSize);
    this.pages = Array.from({length: totalPages}, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  openRecipe(id: number) {
    this.router.navigate(['/recipe', id]); // Use navigate to redirect
  }

  getDisplayedRecipes(): Recipe[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.recipes.slice(start, end);
  }

  getNewRecipes(eventData: { newRecipes: any }) {
    console.log('event', eventData.newRecipes)
    this.recipes = eventData.newRecipes
    console.log('this new', this.recipes)
  }
}
