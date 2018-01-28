import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(private viewCtrl: ViewController, private splashScreen: SplashScreen) {
  }

  ionViewDidEnter() {
    this.splashScreen.hide();
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 4000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

}
