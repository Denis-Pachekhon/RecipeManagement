import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Recipe } from '../models/models';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Input() recipes:any = "";

  search = "";

  newRecipes:any = [];

  recipeSearch:FormGroup = new FormGroup({
    "search": new FormControl(this.search)
  })

  constructor() { 
  }

  ngOnInit(): void {
  }

  @Output() sendNewRecipes = new EventEmitter<{ newRecipes: any }>();

  onSubmit() {
    console.log("submit check", this.recipes);
    console.log('search', this.recipeSearch.value("search"));
    console.log("new", this.newRecipes);
    this.sendNewRecipes.emit({ newRecipes: this.newRecipes });
  }
}
