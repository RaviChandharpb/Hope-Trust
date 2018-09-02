import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { clientRouter } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    clientRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
