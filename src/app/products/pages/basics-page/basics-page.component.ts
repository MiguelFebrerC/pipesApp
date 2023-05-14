import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'Miquel';
  public nameUpper: string = 'MIQUEL';
  public fullName: string = 'MIQuel fEBreR';
  public date: Date = new Date(Date.now());
}
