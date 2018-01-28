import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home';
import { ChatsPage } from '../chats/chats';
import { CallsPage } from '../calls/calls';
import { SearchPage } from '../search/search';
import { MyselfPage } from '../myself/myself';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {

  tab1Root = HomePage;
  tab2Root = ChatsPage;//AboutPage
  tab3Root = CallsPage;
  tab4Root = SearchPage;
  tab5Root = MyselfPage;

  constructor(private navCtrl: NavController, private navParam: NavParams) {
    
  }

  ngOnInit(): void {
    if (this.navParam.get("opencontactpage")) {
      //this.navCtrl.push(MyselfPage);
    }
    
  }
}