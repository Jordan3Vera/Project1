import { Injectable } from '@angular/core';

// Importamos la lista contactos mock
import { LISTA_CONTACTOS } from '../mocks/contacts.mock';
import { IContacto } from '../models/contacto.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  listaContactos: IContacto[] = LISTA_CONTACTOS;

  constructor() { }

  obtenerContactos(sexo?:string): Promise<IContacto[]>{
    if(sexo == 'hmbre' || sexo == 'mujer'){
      let listaFiltrado: IContacto[] = this.listaContactos.filter((contacto) => contacto.sexo == sexo);
      return Promise.resolve(listaFiltrado);
    }else if(sexo == 'todos'){
      return Promise.resolve(this.listaContactos);
    }else{
      return Promise.reject('Filtro no válido');
    }
  }

  obtenerContactoPorId(id: number): Observable<IContacto> | undefined{

    // Buscamos el contacto dentro de la lista de contactos
    const contacto = LISTA_CONTACTOS.find((contacto: IContacto) => contacto.id === id);

    // Creamos un obsevable
    let observable = new Observable<IContacto>(observer => {
      observer.next(contacto); //emitir un valor a todo componente suscrito
      observer.complete(); //No emitimos mas
    });

    if(contacto){
      return observable;
    }else{
      return;
    }
  }
}
