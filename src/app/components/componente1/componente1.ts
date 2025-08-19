import { Component, inject } from '@angular/core';
import { Componente2 } from "../componente2/componente2";
import { Persona } from '../../servicios/persona';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente1',
  imports: [ReactiveFormsModule],
  templateUrl: './componente1.html',
  styleUrl: './componente1.scss'
})
export class Componente1 {
  personaService = inject(Persona);
  formBuilder = inject(FormBuilder);
  personas: any = []

  personaForm: FormGroup;
  constructor() {
    this.getPersonas();
    this.personaForm = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      edad: ['',[Validators.max(100)]],
      email: [''],
      telefono: [''],
      uuid: [null],
    })
  }
  guardarPersona() {
    if(this.personaForm.invalid){
      alert('Errores en el formulario');
    }else{
      if(this.personaForm.value.uuid !== null){
        this.personaService.updatePersona(this.personaForm.value);
      }else{
         this.personaService.addPersona({
          nombre: this.personaForm.value.nombre,
          edad: this.personaForm.value.edad,
          email: this.personaForm.value.email,
          telefono: this.personaForm.value.telefono,
         });
      }
     this.personaForm.reset();
    }   
  }
   borrarPersona(persona:any){
      this.personaService.deletePersona(persona.uuid)
    }
    editarPersona(persona:any){
      console.log('Form value', persona);
      this.personaForm.setValue(persona);
      console.log('Form value', this.personaForm.value);
    }
  getPersonas() {
    this.personaService.getPersonas().subscribe((data: any) => {
      this.personas = data;
    })
  }
}
