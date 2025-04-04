import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  hej <p>cos</p>
   <!--
     <div>
      <ul>
        <li *ngFor="let task of tablica">{{ task }}</li>
      </ul>
    </div>
   -->
  `,
  
  
})

export class DemoComponent {
  tablica: string[] = ['1', '2', '3'];
}