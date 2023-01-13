import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit {

  miFormularioArray: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormularioArray = this.formBuilder.group({
      nombre: '',
      apellidos: '',
      telefonos: this.formBuilder.array([]) //Inicializamos la lsita de telefonos vacía
    });
  }


  // Métdoo getter para obetener el FormArray de la lista de teléfonos
  get telefonosFormulario(): FormArray{
    return this.miFormularioArray.get('telefonos') as FormArray
  }

  // Método para añadir teléfonos a la lista
  anadirTelefono(){
    // Creamos un grupo teléfono
    const telefonoNuevo = this.formBuilder.group({
      prefijo: '',
      numero: ''
    });

    // Añadismos el grupo a la lista de telefonos
    this.telefonosFormulario.push(telefonoNuevo);
  }

  // Método para eliminar teléfonos de la lista
  eliminarTelefono(index: number){
    this.telefonosFormulario.removeAt(index);
  }


}
