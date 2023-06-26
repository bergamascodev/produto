import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  public baseUrl = 'http://localhost:8080/cadastro';

  constructor(private http: HttpClient) { }

  // Categoria
  criarCategoria(categoria: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/categoria`, categoria);
  }

  obterCategoria(categoriaId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/categoria/${categoriaId}`);
  }

  atualizarCategoria(categoriaId: number, categoria: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/categoria/${categoriaId}`, categoria);
  }

  // Pergunta
  criarPergunta(pergunta: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/pergunta`, pergunta);
  }

  obterPergunta(perguntaId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pergunta/${perguntaId}`);
  }

  atualizarPergunta(perguntaId: number, pergunta: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/pergunta/${perguntaId}`, pergunta);
  }

  // Time
  criarTime(time: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/time`, time);
  }

  obterTime(timeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/time/${timeId}`);
  }

  atualizarTime(timeId: number, time: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/time/${timeId}`, time);
  }

  // Usuário
  criarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuario`, usuario);
  }

  obterUsuario(usuarioId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuario/${usuarioId}`);
  }

  atualizarUsuario(usuarioId: number, usuario: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/usuario/${usuarioId}`, usuario);
  }

  atualizarStatusUsuario(usuarioId: number, status: boolean): Observable<any> {
    const data = { status: status };
    return this.http.put(`${this.baseUrl}/usuario/${usuarioId}/change-status`, data);
  }
}
