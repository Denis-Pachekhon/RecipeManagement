import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../models/models';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
