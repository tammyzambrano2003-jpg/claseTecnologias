import { Component, inject } from '@angular/core';
import { Componente2 } from "../componente2/componente2";
import { Persona } from '../../servicios/persona';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-componente1',
  imports: [JsonPipe],
  templateUrl: './componente1.html',
  styleUrl: './componente1.scss'
})
export class Componente1 {
  personaService = inject(Persona);
personas = []
constructor() {
  this.getPersonas();
}
   agregarPersona(){
    this.personaService.addPersona({
      nombre: 'Nuevo Usuario',
      edad: 30,
      email: 'tammy.zambrano@unitec.edu',
      telefono: '1234567890',

    });
  }
  getPersonas(){
    this.personaService.getPersonas().subscribe((data: any) => {
      this.personas = data;
    }) 
  }
}
