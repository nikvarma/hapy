import { Component } from '@angular/core';
import { NavController, FabContainer } from 'ionic-angular';
import { PostsPage } from '../posts/posts';
import { SettingsPage } from '../settings/settings';
import { NotificationsPage } from '../notifications/notifications';
import { ContactPage } from '../contact/contact';
import { ChatsMessageboxPage } from '../chats-messagebox/chats-messagebox';
import { CallsCallboxPage } from '../calls-callbox/calls-callbox';
import { ComponentactionsProvider } from '../../providers/componentactions/componentactions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private componentAction: ComponentactionsProvider) {

  }

  fabItems(fabItem: string, fab: FabContainer) {
    switch (fabItem) {
      case "settings": this.navCtrl.push(SettingsPage); this.componentAction.fabClose(fab);
        break;
      case "posts": this.navCtrl.push(PostsPage); this.componentAction.fabClose(fab);
        break;
      case "notifications": this.navCtrl.push(NotificationsPage); this.componentAction.fabClose(fab);
        break;
      case "contacts": this.navCtrl.push(ContactPage); this.componentAction.fabClose(fab);
        break;
      default:
        break;
    }
  }

  chat(): void {
    this.navCtrl.push(ChatsMessageboxPage, { "uid": "1", "uname": "User Window" });
  }

  call(): void {
    this.navCtrl.push(CallsCallboxPage, { "uid": "1", "uname": "User Window" });
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      // for (let i = 0; i < 30; i++) {
      //   this.items.push(this.items.length);
      // }

      console.log('Async operation has ended');
      //infiniteScroll.complete();
      this.componentAction.doInfiniteComplete(infiniteScroll);
    }, 500);
  }
}