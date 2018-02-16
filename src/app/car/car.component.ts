import { Component, Input } from '@angular/core';
import { ConsoleServices } from '../console.services';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [ConsoleServices]
})
export class CarComponent {

  @Input() car;

  constructor(private consoleService: ConsoleServices) {  }

  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    };
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy' ? true : false;
    this.consoleService.log(`${this.car.name} status : ${type}`);
    /*console.log(`${this.car.name} status : ${type}`);*/
  }


}
