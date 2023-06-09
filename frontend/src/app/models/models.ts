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
  public imagePath: string | null;
  public description: string;
  public ingredients: Ingredient[];
  public calories: number | null;

  constructor(title: string, description: string, imagePath : string, ingredients: Ingredient[]) {
    this.title = title;
    this.imagePath = imagePath;
    this.description = description;
    this.ingredients = ingredients;
  }
}
