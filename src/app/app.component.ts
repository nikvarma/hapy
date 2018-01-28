import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SplashPage } from '../pages/splash/splash';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { BaseDB } from '../providers/sqlDB/base';
import { AuthLoginPage } from '../pages/auth-login/auth-login';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private modalCtrl: ModalController, private baseDb: BaseDB) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // let splash = this.modalCtrl.create(SplashPage);
      // splash.present();

      let authCheck = this.baseDb.selectFromDB('user');
      authCheck.then((res) => {
        if (res != null) {
          if (typeof res === "object") {
            this.rootPage = TabsPage;
          } else {
            this.rootPage = AuthLoginPage;
          }
        } else {
          this.rootPage = AuthLoginPage;
        }
      });

      // if (window.cordova && window.cordova.plugins.keyborad) {
      //   cordova.plugins.Keyboard.disableScroll(true);
      // }
    });
  }
}