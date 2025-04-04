import { Component, NgModule   } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ul>
        <li *ngFor="let task of tablica">{{ task }}</li>
      </ul>
    </div>
  `,
  
})

export class DemoComponent {
  tablica: string[] = ['1', '2', '3'];
}