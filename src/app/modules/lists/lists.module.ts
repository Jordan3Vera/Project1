import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';



@NgModule({
  declarations: [
    ListaBasicaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //Exportando aquellas clases {components/pipes, srvices, ect } que queramos compartir q quien importe este módulo
    ListaBasicaComponent
  ]
})
export class ListsModule { }
