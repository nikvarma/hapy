import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatsMessageboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats-messagebox',
  templateUrl: 'chats-messagebox.html',
})
export class ChatsMessageboxPage {
  uname: string;
  uid: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.uname = navParams.get("uname");
    this.uid = navParams.get("uid");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsMessageboxPage');
  }

}
