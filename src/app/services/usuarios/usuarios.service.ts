import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}

  getUsuarios() {
    return this.httpClient.get('http://localhost:4000/api/v1/usuario');
  }
}


