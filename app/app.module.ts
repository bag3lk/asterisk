import { NgModule } from '@angular/core';  // Importing the NgModule decorator
import { BrowserModule } from '@angular/platform-browser';  // Required for running Angular in the browser
import { AppComponent } from './app.component';  // Importing the root component
import { FormsModule } from '@angular/forms'; // to jest do inputa w app.conponent.html

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],    
  bootstrap: [AppComponent]
})
export class AppModule { }

//cotojest
