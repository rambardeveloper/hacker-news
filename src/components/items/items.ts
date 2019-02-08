import { Component } from '@angular/core';

/**
 * Generated class for the ItemsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'items',
  templateUrl: 'items.html'
})
export class ItemsComponent {

  text: string;

  constructor() {
    console.log('Hello ItemsComponent Component');
    this.text = 'Hello World';
  }

}
