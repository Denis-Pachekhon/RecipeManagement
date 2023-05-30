import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe, Ingredient } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'https://localhost:5001/api/recipe';

  private headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InBhY2hlaG9uLmRAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJlZmVhYWZiNC01NDZmLTQwMmMtYjlmYi0wMTMxYmRmNDRmN2IiLCJleHAiOjE2ODc5OTQ2MTksImlzcyI6Imh0dHA6Ly9haG1hZG1vemFmZmFyLm5ldCIsImF1ZCI6Imh0dHA6Ly9haG1hZG1vemFmZmFyLm5ldCJ9.pTs-Zrx9UxewBf8YMZLmzNRcDbm5zyXmAqCpVyeBRQc');
    
  constructor(private http: HttpClient) { }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`, {headers: this.headers});
  }

  getAllUserRecipes(): Observable<Recipe[]> {
    var i = this.http.get<Recipe[]>(this.baseUrl + '/user', {headers : this.headers});
    return i;
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl, {headers : this.headers});
  }

  addRecipe(recipe: Recipe): Observable<any> {
    return this.http.post(this.baseUrl, recipe, {headers : this.headers});
  }

  updateRecipe(recipe: Recipe): Observable<any> {
    return this.http.put(this.baseUrl, recipe);
  }

  deleteRecipe(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getIngredient() : Observable<Ingredient[]>{
    var i = this.http.get<Ingredient[]>('https://localhost:5001/api/ingredient');
    return i;
  }
}
