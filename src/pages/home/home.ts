import { Component } from '@angular/core';
import { NavController, FabContainer } from 'ionic-angular';
import { PostsPage } from '../posts/posts';
import { SettingsPage } from '../settings/settings';
import { NotificationsPage } from '../notifications/notifications';
import { ContactPage } from '../contact/contact';
import { ChatsMessageboxPage } from '../chats-messagebox/chats-messagebox';
import { CallsCallboxPage } from '../calls-callbox/calls-callbox';
import { ComponentactionsProvider } from '../../providers/componentactions/componentactions';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Page } from 'ionic-angular/navigation/nav-util';
import { OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, AfterViewInit {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController,
    private componentAction: ComponentactionsProvider) {

  }

  fabItems(fabItem: string, fab: FabContainer) {
    let pageToOpen: Page;
    switch (fabItem) {
      case "settings":
        this.navCtrl.push(SettingsPage);
        break;
      case "posts":
        pageToOpen = PostsPage;
        break;
      case "notifications":
        this.navCtrl.push(NotificationsPage);
        break;
      case "contacts":
        this.navCtrl.push(ContactPage);
        break;
      default:
        break;
    }
    if (pageToOpen) {
      this.modalCtrl.create(pageToOpen).present();
      this.componentAction.fabClose(fab);
    }
  }

  chat(): void {
    let chatModal = this.modalCtrl.create(ChatsMessageboxPage, { "uid": "1", "uname": "User Window" });
    chatModal.present();
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

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
  }
}