import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() nombre: string = "Martin";
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  myStyle: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeigth: 'bold'
  };

  constructor() { }

  ngOnInit(): void {
    // *Instrucciones previas a la renderizacón del componente
    console.log("ngOnIni del compoenente")
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(`CAMBIO: Valor Anterior: ${changes['nombre'].previousValue}`);
    console.log("CAMBIO: Valor Nuevo",changes['nombre'].currentValue)
  }

  ngOnDestroy(): void {
    throw new Error("Methods not implement")
  }

  /**
   ** Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente
   */

   enviarMensajeAlPadre(): void{
    this.mensajeEmitter.emit(`Hola, ${this.nombre}. Alerta despachada desde un click de botón`);
   }

   //Orden de ciclo de vida de los componentes
  //  * 1. ngOnChanges
  // * 2. ngOnInit
  //  3. ngAfterContentInit
  //  4. ngAfterContentChecked
  //  5. ngAfterViewInit
  //  6. ngAfterViewChecked
  //  7. ngAfterContentCheked
  // * 8. ngOnDestroy


}
