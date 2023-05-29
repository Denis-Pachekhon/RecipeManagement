export interface Recipe {
    id : number,
    title: string;
    description: string;
    ingredients: Ingredient[];
    calories: number;
  }

export interface Ingredient {
  // Вам потрібно вказати поля для інгредієнтів відповідно до вашої моделі на сервері
}