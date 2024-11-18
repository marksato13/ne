import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-procesos-pages',
  templateUrl: './procesos-pages.component.html',
  styleUrls: ['./procesos-pages.component.css']
})
export class ProcesosPagesComponent implements OnInit {

  estudiante: any = {};
  empresas: any[] = [];
  lineas: any[] = [];
  empresaSeleccionada: any = {}; // Propiedad para la empresa seleccionada
  ppp: any = {
    estado: '',
    empresaId: null,
    lineaId: null,
    planCarreraId: null,
    usuarioId: null
  };

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getEstudiante(1); // ID del estudiante (por ejemplo, 1)
    this.getEmpresas();
    this.getLineas();
  }

  getEstudiante(id: number): void {
    this.service.getEstudianteById(id).subscribe({
      next: (data) => {
        this.estudiante = data;
      },
      error: (err) => {
        console.error('Error al obtener los datos del estudiante', err);
      }
    });
  }

  getEmpresas(): void {
    this.service.getAllEmpresas().subscribe({
      next: (data) => {
        this.empresas = data;
      },
      error: (err) => {
        console.error('Error al obtener las empresas', err);
      }
    });
  }

  getLineas(): void {
    this.service.getAllLineas().subscribe({
      next: (data) => {
        this.lineas = data;
      },
      error: (err) => {
        console.error('Error al obtener las líneas', err);
      }
    });
  }

  onEmpresaChange(): void {
    if (this.ppp.empresaId) {
      this.service.getEmpresaById(this.ppp.empresaId).subscribe({
        next: (data) => {
          this.empresaSeleccionada = data;
        },
        error: (err) => {
          console.error('Error al obtener los detalles de la empresa', err);
        }
      });
    }
  }

  confirmarPPP(): void {
    console.log('Datos enviados al backend:', this.ppp); // Agrega esta línea para depuración
    this.service.createPPP(this.ppp).subscribe({
      next: (data) => {
        console.log('Respuesta del backend:', data);
        alert('PPP creado exitosamente');
      },
      error: (err) => {
        console.error('Error al crear PPP:', err);
        alert('Ocurrió un error al crear PPP, revisa la consola para más detalles');
      }
    });
  }
  

  cancelar(): void {
    alert('Operación cancelada');
  }
}
