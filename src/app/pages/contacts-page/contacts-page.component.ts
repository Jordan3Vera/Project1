import { RandomUserService } from 'src/app/services/random-user.service';
import { Component, OnInit } from '@angular/core';
import { IContacto } from '../../models/contact.interface';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { IRandomContact, Results } from '../../models/randomuser';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  filtroSexo: string = 'todos';
  listaRandomContacts: IRandomContact[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private randomUserService: RandomUserService)
  { }

  ngOnInit(): void {

    // Obtenemos los Query Params
    this.route.queryParams.subscribe({
      next: (params: any) => {
        console.log('QueryParams:',params.sexo);
        if(params.sexo){
          this.filtroSexo = params.sexo;

          if(params.sexo === 'female' || params.sexo == 'male'){
            // Implmentación para obtener la lista de contactos aleatoria
            this.randomUserService.obtenerRandomContacts(10, params.sexo ).subscribe({
              next: (res: Results) => {
                res.results.forEach((randomContact: IRandomContact, index: number) => {
                  this.listaRandomContacts.push(randomContact);
                });
              },
              error: (err) => console.error(err)
            });
          }else{
            this.randomUserService.obtenerRandomContacts(10).subscribe({
              next: (res: Results) => {
                res.results.forEach((randomContact: IRandomContact, index: number) => {
                  this.listaRandomContacts.push(randomContact);
                });
              },
              error: (err) => console.error(err)
            });
          }
        }
      }
    });
  }

  //Ejemplo de paso de información entre componentes a través del ESTADO
  volverAHome(contacto: IRandomContact){
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }
    this.router.navigate(["/home"], navigationExtras);
  }




}
