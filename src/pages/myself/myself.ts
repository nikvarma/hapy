import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComponentactionsProvider } from '../../providers/componentactions/componentactions';

/**
 * Generated class for the MyselfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myself',
  templateUrl: 'myself.html',
})
export class MyselfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private componentAction: ComponentactionsProvider) {
  }


  doRefresh(refresher: Event) {
    let refresh = this.componentAction.doRefresh(refresher);
    setTimeout(() => {
      this.componentAction.doRefreshComplete(refresh);
      console.log('Async operation has ended');
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyselfPage');
  }

}
