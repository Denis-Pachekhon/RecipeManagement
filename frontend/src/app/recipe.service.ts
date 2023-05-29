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
    let headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InBhY2hlaG9uLmRAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI0NjkwZGRiMS0xNDNkLTQ2ODEtOTA4MS1lZjY1ZmUxYTQzNzkiLCJleHAiOjE2ODc0NDQwMzIsImlzcyI6Imh0dHA6Ly9haG1hZG1vemFmZmFyLm5ldCIsImF1ZCI6Imh0dHA6Ly9haG1hZG1vemFmZmFyLm5ldCJ9.LeEy5vu2B10iLGRkMJ9pIKTZd6cAG85DWNYrCuoW5-U');
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
