import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastro/usuario`, usuario).pipe(
      catchError(this.handleError<any>('Erro ao registrar usuário'))
    );
  }

  login(credentials: any): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        return true;
      }),
      catchError(this.handleError<boolean>('Erro ao fazer login'))
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  verificarAutenticacao(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  private handleError<T>(operation = 'Operação', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
