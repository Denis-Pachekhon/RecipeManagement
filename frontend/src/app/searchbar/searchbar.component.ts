import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Input() recipes:any = "";

  newRecipes:any = [];

  searchRecipe:string = ""

  constructor() {}

  ngOnInit(): void {}

  @Output() searchChange = new EventEmitter<any>();

  onSearchChange(model: any) {
    this.newRecipes = this.recipes.filter((el) => {
      if(model === "") {
        return el;
      } else if (el.title.includes(model)) {
        return el;
      };
    });
    if(model === "") {this.newRecipes = false}
    this.searchChange.emit(this.newRecipes);
  }
}
