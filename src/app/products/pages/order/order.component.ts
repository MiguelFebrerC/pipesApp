import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  public heroes: Heroe[] = [
    {
      nombre: 'Spidereman',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde,
    },
  ];
  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
