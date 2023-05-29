export interface Recipe {
    id : number,
    title: string;
    description: string;
    ingredients: Ingredient[];
    calories: number;
  }

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