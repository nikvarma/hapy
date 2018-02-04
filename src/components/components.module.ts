import { NgModule } from '@angular/core';
import { CallsComponent } from './calls/calls';
import { MediaviewersmallComponent } from './mediaviewersmall/mediaviewersmall';
@NgModule({
	declarations: [CallsComponent,
    MediaviewersmallComponent],
	imports: [],
	exports: [CallsComponent,
    MediaviewersmallComponent]
})
export class ComponentsModule {}
