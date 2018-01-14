import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatsPageModule } from '../pages/chats/chats.module';
import { CallsPageModule } from '../pages/calls/calls.module';
import { SearchPageModule } from '../pages/search/search.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { MyselfPageModule } from '../pages/myself/myself.module';
import { NotificationsPageModule } from '../pages/notifications/notifications.module';
import { PostsPageModule } from '../pages/posts/posts.module';
import { ChatsMessageboxPageModule } from '../pages/chats-messagebox/chats-messagebox.module';
import { CallsCallboxPageModule } from '../pages/calls-callbox/calls-callbox.module';
import { ComponentactionsProvider } from '../providers/componentactions/componentactions';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    CallsPageModule,
    CallsCallboxPageModule,
    ChatsPageModule,
    ChatsMessageboxPageModule,
    MyselfPageModule,
    NotificationsPageModule,
    PostsPageModule,
    SearchPageModule,
    SettingsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    ComponentactionsProvider,
    HttpClient,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ComponentactionsProvider
  ]
})
export class AppModule {}
