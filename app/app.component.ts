import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false, // przez dwie godziny probowalam zrozumiec co jest nie tak z tym kodem.kms
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  shoppingList = ['jajka', 'mleko', 'chleb', 'cukier'];

  addMe: string = '';
  errorText: string = '';
}
