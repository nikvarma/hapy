import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearbyLocationsPage } from './nearby-locations';

@NgModule({
  declarations: [
    NearbyLocationsPage,
  ],
  imports: [
    IonicPageModule.forChild(NearbyLocationsPage),
  ],
})
export class NearbyLocationsPageModule {}
