import { Component } from '@angular/core';


@Component({
  selector: 'mediaviewersmall',
  templateUrl: 'mediaviewersmall.html',
  inputs: ["medialist"]
})
export class MediaviewersmallComponent {

  text: string;

  constructor() {
    console.log('Hello MediaviewersmallComponent Component');
    this.text = 'Hello World';
  }

}
