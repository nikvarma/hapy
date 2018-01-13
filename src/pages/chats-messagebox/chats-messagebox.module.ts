import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatsMessageboxPage } from './chats-messagebox';

@NgModule({
  declarations: [
    ChatsMessageboxPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatsMessageboxPage),
  ],
})
export class ChatsMessageboxPageModule {}
