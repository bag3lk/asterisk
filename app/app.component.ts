import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false, // przez dwie godziny probowalam zrozumiec co jest nie tak z tym kodem. japeirdole.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista';
}
