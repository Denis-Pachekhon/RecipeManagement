import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import {Ingredient, Recipe} from '../models/models'

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  constructor(public route: ActivatedRoute, public recipeService: RecipeService, public router: Router) { }

  ngOnInit() {
    
  }
  

 
  
}
