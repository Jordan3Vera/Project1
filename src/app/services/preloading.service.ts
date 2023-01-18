import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';


// Creamos un clase de opciones de precarga
// va a servir para definir las opciones que debe tener una ruta
// para precargar o no un módulo
export class PreloadingOptions {
  constructor(public routePath: string, public preload: boolean = true){}
}

@Injectable({
  providedIn: 'root'
})
export class PreloadingService {

  // Un subject es un tipo de Observable que permite emitir valores
  // a quien esté suscrito al mismo a través del método .next(nuevoValor)
  private _subject = new Subject<PreloadingOptions>();

  // Cualquier Subject puede ser tratado como un Observable y es el que tenemos
  // que hacer público.
  // Con él vamos a ofrecer las opciones de la ruta quedesea ser precargada como un Observable
  public options$ = this._subject.asObservable();

  constructor() { }

   /**
   * Método encargado de iniciar una evaluación de precarga
   * @param routePath Ruta que se desea precargar
   */

   comenzarPrecarga(routePath: string){
    // Creamos unas opciones de precarga
    const opcionesPrecarga: PreloadingOptions = new PreloadingOptions(routePath, true);

    // Emitimos las opciones que desean ser precargadas
    // Esta información la va a escuchar la ESTRATEGIA DE PRECARGA
    // * ON-DEMAND-PRELOADING-STRATEGY
    // Para así evaluar si debe o no debe precarga la ruta
    this._subject.next(opcionesPrecarga);
  }
}
