import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'http://localhost:8080/api/ppp'; // URL base del backend

  constructor(private http: HttpClient) { }

  // Obtener los datos del estudiante por ID
  getEstudianteById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/estudiante/${id}`);
  }

  // Listar todas las empresas
  getAllEmpresas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/empresas`);
  }

  // Obtener una empresa por ID
  getEmpresaById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/empresa/${id}`);
  }

  // Listar todas las líneas
  getAllLineas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/lineas`);
  }

  // Crear un nuevo PPP
  createPPP(pppDto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, pppDto);
  }
}
