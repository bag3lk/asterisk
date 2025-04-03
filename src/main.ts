import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <ul>
    <li *ngFor="let task of tasks">{{ task }}</li>
  </ul>
</div>


  `,
})
export class DemoComponent {
  tablica: string[] = ['', ''];
}

