import { Component, OnInit, Input } from '@angular/core';
import { Results, IRandomContact } from '../../models/randomuser';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {

  @Input() randomContact: IRandomContact | undefined;

  constructor() { }

  ngOnInit(): void {}

}
