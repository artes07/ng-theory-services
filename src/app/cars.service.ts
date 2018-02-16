import {ConsoleServices} from './console.services';
import {Injectable} from '@angular/core';

@Injectable()
export class CarsService {

  constructor(private consoleServices: ConsoleServices) {}

  cars = [{
    name: 'Ford',
    isSold: false
  }, {
    name: 'Mazda',
    isSold: true
  }, {
    name: 'Mercedes',
    isSold: false
  }];

  addCar(name: string) {
    this.cars.push({ name, isSold: false });
    this.consoleServices.log(`Car ${name} was added`);
  }
}
