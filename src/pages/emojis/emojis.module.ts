import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmojisPage } from './emojis';

@NgModule({
  declarations: [
    EmojisPage,
  ],
  imports: [
    IonicPageModule.forChild(EmojisPage),
  ],
})
export class EmojisPageModule {}
