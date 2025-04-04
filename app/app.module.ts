import { NgModule } from '@angular/core';  // Importing the NgModule decorator
import { BrowserModule } from '@angular/platform-browser';  // Required for running Angular in the browser
import { AppComponent } from './app.component';  // Importing the root component

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],    
  bootstrap: [AppComponent]
})
export class AppModule { }

//cotojest
