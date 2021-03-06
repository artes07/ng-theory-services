import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarAddComponent } from './car-add/car-add.component';
import {CarsService} from './cars.service';
import {ConsoleServices} from './console.services';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ CarsService, ConsoleServices ],
  bootstrap: [AppComponent]
})
export class AppModule { }
