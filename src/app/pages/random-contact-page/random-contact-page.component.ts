import { Component, OnInit, Input } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import { Results, IRandomContact } from '../../models/randomuser';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']
})
export class RandomContactPageComponent implements OnInit {

  @Input() contact: IRandomContact | undefined;

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.randomUserService.obtenerRandomContact().subscribe({
      next: (res: any) => {
        this.contact = res.results[0]; //Se lo pasaríamos al randomContact
        // console.log(res);
      }
    });
  }

  obtenerNuevoContacto(){
    this.randomUserService.obtenerRandomContact().subscribe({
      next: (res: Results) => {
        this.contact = res.results[0]; //Se lo pasaríamos al randomContact
        // console.log(res.results[0])
      },
      error: (err) => console.error(err)
    });
  }

  obtenerListaContactos(n: number){
    this.randomUserService.obtenerRandomContacts(n).subscribe({
      next: (res: Results) => {
        // this.contact = res.results[0]; //Se lo pasaríamos al randomContact
        console.log(res);
      },
      error: (err) => console.error(err)
    });
  }

}
