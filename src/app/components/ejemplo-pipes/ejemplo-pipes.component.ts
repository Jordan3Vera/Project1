import { Component, OnInit } from '@angular/core';
import { IJugador } from '../../models/jugador.interface';
import { IContacto } from '../../models/contact.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit {

  dob: Date = new Date(1991,3,10);
  cambio: boolean = true;
  nombre: string = "Martín";
  numero_PI: number = 3.141592653587;
  precioCarrito: number = 100;
  persona: IContacto = {
    id: 0,
    nombre: 'Martín',
    apellidos: 'San José',
    edad: 30,
    email: 'martin@exmaple.com'
  };
  cantidad: number = 0.3512;
  textoLargo: string = "dfjdfnds sdnf sdjpo eiw fjsdif dsfm";


  // Ejemplo pipe para calcular puntuación
  jugador1: IJugador = {
    nombre: "Martín",
    puntos: [10,30,40,0]
  }
  jugador2: IJugador = {
    nombre: "Pepe",
    puntos: [0,80,10,5]
  }

  constructor() { }

  ngOnInit(): void {
  }

  get dateFormat(){
    return this.cambio ? 'shortDate' : 'fullDate'
  }

  cambiarFormato(){
    this.cambio = !this.cambio;
  }

}
