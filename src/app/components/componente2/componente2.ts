import { Component } from '@angular/core';
import { Componente3 } from '../componente3/componente3';

@Component({
  selector: 'app-componente2',
  imports: [Componente3],
  templateUrl: './componente2.html',
  styleUrl: './componente2.scss'
})
export class Componente2 {

}
