import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IterpolationComponent } from './iterpolation/iterpolation.component';
import { PorpertyBindingComponent } from './porperty-binding/porperty-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { Exercicio1Component } from './exercicio1/exercicio1.component';

@NgModule({
  declarations: [
    AppComponent,
    IterpolationComponent,
    PorpertyBindingComponent,
    EventBindingComponent,
    Exercicio1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
