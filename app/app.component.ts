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

  addItem(): void {
    this.errorText = '';
    if (!this.addMe) {
      return;
    }
    if (this.shoppingList.indexOf(this.addMe) === -1) {
      this.shoppingList.push(this.addMe);
    } 
    else {
      this.errorText = 'The item is already in your shopping list.';
    }
  }
  removeItem(index: number): void {
    this.errorText = '';
    this.shoppingList.splice(index, 1);
  }
}
