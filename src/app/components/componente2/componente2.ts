import { Component, inject } from '@angular/core';
import { Componente3 } from '../componente3/componente3';
import { Persona } from '../../servicios/persona';
@Component({
  selector: 'app-componente2',
  imports: [Componente3],
  templateUrl: './componente2.html',
  styleUrl: './componente2.scss'
})
export class Componente2 {
personaService = inject(Persona);

  agregarPersona(){
    this.personaService.addPersona({
      nombre: 'Nuevo Usuario',
      edad: 30,
      email: 'tammy.zambrano@unitec.edu',
      telefono: '1234567890'

    })
  }
}
