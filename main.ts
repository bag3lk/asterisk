import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


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

export class AppComponent {
  tablica: string[] = ['1', '2', '3'];
}