import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterViewModel, UserManagerResponse } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:5001/api/user';

  constructor(private http: HttpClient) { }

  registerUser(data : RegisterViewModel): Observable<UserManagerResponse> {
    return this.http.post<UserManagerResponse>(this.baseUrl + '/register', data);
  }

  loginUser(data : RegisterViewModel): Observable<UserManagerResponse> {
    return this.http.post<UserManagerResponse>(this.baseUrl + '/login', data);
  }
}
