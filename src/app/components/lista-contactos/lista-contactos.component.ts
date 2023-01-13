import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { IContacto } from '../../models/contacto.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {

  // Creamos una lista de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  // Suscripción de servicio
  subscription: Subscription | undefined;

  // Inyectamos en el constructor el servicio de contactos
  constructor(private contactoService: ContactService) { }

  ngOnInit(): void {
    // Obtener la lista contactos que nos brinda el servicio
    this.contactoService.obtenerContactos()
    .then((lista: IContacto[]) => this.listaContactos = lista)
    .catch((err) => alert("Error al recuperar la lista de contacto" + err))
    .finally(() => console.log("Petición de lista de contactos"));
    console.table(this.listaContactos);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  obtenerContacto(id: number){
    this.contactoService.obtenerContactoPorId(id)?.subscribe({
      next: (contacto: IContacto) => this.contactoSeleccionado = contacto
    })
  }

}
