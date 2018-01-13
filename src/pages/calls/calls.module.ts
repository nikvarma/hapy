import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallsPage } from './calls';
import { CallsCallboxPageModule } from '../calls-callbox/calls-callbox.module';
import { ChatsMessageboxPageModule } from '../chats-messagebox/chats-messagebox.module';

@NgModule({
  declarations: [
    CallsPage,
  ],
  imports: [
    CallsCallboxPageModule,
    ChatsMessageboxPageModule,
    IonicPageModule.forChild(CallsPage),
  ],
})
export class CallsPageModule {}
