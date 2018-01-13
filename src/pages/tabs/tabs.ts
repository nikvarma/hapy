import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ChatsPage } from '../chats/chats';
import { CallsPage } from '../calls/calls';
import { SearchPage } from '../search/search';
import { MyselfPage } from '../myself/myself';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChatsPage;//AboutPage
  tab3Root = CallsPage;
  tab4Root = SearchPage;
  tab5Root = MyselfPage;

  constructor() {

  }
}
