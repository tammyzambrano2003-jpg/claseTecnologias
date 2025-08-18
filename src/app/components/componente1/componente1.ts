import { Component } from '@angular/core';
import { Componente2 } from "../componente2/componente2";

@Component({
  selector: 'app-componente1',
  imports: [Componente2],
  templateUrl: './componente1.html',
  styleUrl: './componente1.scss'
})
export class Componente1 {

}
