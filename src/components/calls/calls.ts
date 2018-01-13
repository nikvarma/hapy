import { Component } from '@angular/core';

/**
 * Generated class for the CallsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'calls',
  templateUrl: 'calls.html'
})
export class CallsComponent {

  text: string;

  constructor() {
    console.log('Hello CallsComponent Component');
    this.text = 'Hello World';
  }

}
