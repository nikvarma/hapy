import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackgroundcolorPickerPage } from './backgroundcolor-picker';

@NgModule({
  declarations: [
    BackgroundcolorPickerPage,
  ],
  imports: [
    IonicPageModule.forChild(BackgroundcolorPickerPage),
  ],
})
export class BackgroundcolorPickerPageModule {}
