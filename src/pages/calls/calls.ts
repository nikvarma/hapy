import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CallsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calls',
  templateUrl: 'calls.html',
})
export class CallsPage {
  callList: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getItems(ev: any): void {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallsPage');
  }

}
