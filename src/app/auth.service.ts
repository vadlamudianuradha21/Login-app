import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('API_ENDPOINT', { email, password }).pipe(
      map(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          return { success: true };
        } else {
          return { success: false };
        }
      })
    );
  }
}
