import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'https://localhost:5001/api/recipe';

  constructor(private http: HttpClient) { }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`);
  }

  getAllUserRecipes(): Observable<Recipe[]> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InBhY2hlaG9uLmRAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJjM2QzOWViOS1kMmUyLTQzMWQtODMyOC0zYmJlZmE4MjBiOTciLCJleHAiOjE2ODc5NDI3NTMsImlzcyI6Imh0dHA6Ly9haG1hZG1vemFmZmFyLm5ldCIsImF1ZCI6Imh0dHA6Ly9haG1hZG1vemFmZmFyLm5ldCJ9.Lq4oNLL31atqmEzVurwJsBG4zdNfmYlovZyAEoFhkxI');
    var i = this.http.get<Recipe[]>(this.baseUrl + '/user', {headers : headers});
    return i;
  }

  getAllRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addRecipe(recipe: Recipe): Observable<any> {
    return this.http.post(this.baseUrl, recipe);
  }

  updateRecipe(recipe: Recipe): Observable<any> {
    return this.http.put(this.baseUrl, recipe);
  }

  deleteRecipe(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
