import { Component, Input, OnInit } from '@angular/core';
import { ITask, LEVELS } from '../../models/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

@Input() task: ITask = {
  title: 'Titulo por defecto',
  description: 'Descripción po defecto',
  level: LEVELS.INFO,
  completed: false
};

  constructor() { }

  ngOnInit(): void {
  }

}
