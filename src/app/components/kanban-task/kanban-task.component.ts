import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// Importamos el modelo de ITask
import { ITask, LEVELS } from 'src/app/models/task.interface';


@Component({
  selector: 'app-kanban-task',
  templateUrl: './kanban-task.component.html',
  styleUrls: ['./kanban-task.component.scss'],
})
export class KanbanTaskComponent {

  allTasks: ITask[] = [
    {
      title: 'Animaciones',
      description: 'Aprender animaciones en Angular',
      completed: false,
      level: LEVELS.INFO
    },
    {
      title: 'Angular CLI',
      description: 'Aprender comando y configuración de Angular CLI',
      completed: false,
      level: LEVELS.URGENT
    },
    {
      title: 'Build',
      description: 'Aprender a generar builds con Angular CLI',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Deploy',
      description: 'Aprender a desplegar bundles en Firebase',
      completed: false,
      level: LEVELS.BLOCKING
    }
  ];

  doneTasks: ITask[] = [
    {
      title: 'Configuración IDE',
      description: 'Configurar e instalar plugins en Visual studio Code',
      completed: true,
      level: LEVELS.INFO
    },
    {
      title: 'Instalar Angular CLI',
      description: 'Aprender con NPM el Angular CLI de forma global',
      completed: true,
      level: LEVELS.URGENT
    },
    {
      title: 'Hola Mundo',
      description: 'Aprender con Angular CLI un proyecto incial',
      completed: true,
      level: LEVELS.URGENT
    },
    {
      title: 'Deploy',
      description: 'Aprender a desplegar bundles en Firebase',
      completed: false,
      level: LEVELS.BLOCKING
    }
  ];

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Actualizamos el valor completed de la tarea
      event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed

      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
