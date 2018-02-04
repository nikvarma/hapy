import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mediaviewersmall',
  templateUrl: 'mediaviewersmall.html'
})

export class MediaviewersmallComponent implements OnInit {
  @Input()
  medialist: any[];
  @Output()
  slideEventRemove = new EventEmitter<any>();
  constructor() {

  }

  logDrag(event, index): void {
    this.slideEventRemove.emit({event: event, index: index});
  }

  ngOnInit(): void {
    console.log(this.medialist);
  }
}
