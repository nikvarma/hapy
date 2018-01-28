import { Directive } from '@angular/core';

@Directive({
  selector: '[comment]' // Attribute selector
})
export class CommentDirective {

  constructor() {
    console.log('Hello CommentDirective Directive');
  }

}
