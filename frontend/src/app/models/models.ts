export interface Ingredient {
  id : number,
  name : string;
  protein : number,
  fats : number,
  carbohydrates : number,
  quantity : number
}

export interface RegisterViewModel {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserManagerResponse {
  message : string,
  isSuccess : boolean,
  errors : Array<string>,
  expireDate : Date
}
/**
 * Recipe blueprint
 */
export class Recipe {
  public id : number;
  public title: string;
  public description: string;
  public ingredients: Ingredient[];
  public calories: number;

  constructor(title: string, description: string, ingredients: Ingredient[]) {
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
  }
}
