import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallsCallboxPage } from './calls-callbox';

@NgModule({
  declarations: [
    CallsCallboxPage,
  ],
  imports: [
    IonicPageModule.forChild(CallsCallboxPage),
  ],
})
export class CallsCallboxPageModule {}
