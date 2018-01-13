import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatsMessageboxPage } from '../chats-messagebox/chats-messagebox';
import { CallsCallboxPage } from '../calls-callbox/calls-callbox';

/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})

export class ChatsPage {
  chatList: any[] = [];
  searchQuery: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.chatList = [
      'Amsterdam',
      'Bogota'
    ];
  }

  getItems(ev: any): void {
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.chatList = this.chatList.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  chat(): void {
    this.navCtrl.push(ChatsMessageboxPage, {"uid":"1", "uname": "User Window"});
  }

  call(): void {
    this.navCtrl.push(CallsCallboxPage, {"uid":"1", "uname": "User Window"});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

}
