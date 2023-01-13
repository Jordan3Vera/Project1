import { Component, OnInit } from '@angular/core';


export type Producto = {
  nombre: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit {

  listaElementos: Producto[] = [
    {
      nombre: "Leche",
      precio: 10,
      descripcion: "Leche entera"
    },
    {
      nombre: "Carne",
      precio: 20,
      descripcion: "Carne de precio"
    }
  ]
  cargando: boolean = false;
  opcion: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  cambiarCargando(){
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida: number){
    this.opcion = opcionEscogida; // el valor cambia, implica un cambio en los elementos renderizados
  }
}
