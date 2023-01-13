import { Component, OnInit } from '@angular/core';

// * Ejemplo básico de formulario reactivo
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  // Definimos nuestro formulario
  miFormulario: FormGroup = new FormGroup({});


  // Inyectamos la clase formBuilder  para construir el FormBuilder
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // Iniciamos los cmapos del formulario y sus valores por defecto
    this.miFormulario = this.formBuilder.group(
      {
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        direccion: ''
      }
    );

    // No suscribimos a los cambios que ocurran en el Formulario y los mostramos por consola
    this.miFormulario.valueChanges.subscribe();
  }

}
