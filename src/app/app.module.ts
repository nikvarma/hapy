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
import { AuthLoginPageModule } from '../pages/auth-login/auth-login.module';
import { AuthLoginPage } from '../pages/auth-login/auth-login';
import { DirectivesModule } from '../directives/directives.module';
import { SplashPage } from '../pages/splash/splash';
import { IonicStorageModule } from '@ionic/storage';
import { BaseDB } from '../providers/sqlDB/base';
import { FormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook } from '@ionic-native/facebook';
import { ContinentsProvider } from '../providers/continents/continents';
import { HttprequestsProvider } from '../providers/httprequests/httprequests';
import { HttpClientModule } from '@angular/common/http';
import { EmojisPageModule } from '../pages/emojis/emojis.module';
import { NearbyLocationsPageModule } from '../pages/nearby-locations/nearby-locations.module';
import { LocationsharingPageModule } from '../pages/locationsharing/locationsharing.module';
import { Firebase } from "@ionic-native/firebase";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SplashPage,
    TabsPage
  ],
  imports: [
    AuthLoginPageModule,
    BrowserModule,
    CallsPageModule,
    CallsCallboxPageModule,
    ChatsPageModule,
    ChatsMessageboxPageModule,
    DirectivesModule,
    EmojisPageModule,
    FormsModule,
    HttpClientModule,
    LocationsharingPageModule,
    MyselfPageModule,
    NearbyLocationsPageModule,
    NotificationsPageModule,
    PostsPageModule,
    SearchPageModule,
    SettingsPageModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: true,
      autoFocusAssist: true
    }),
    IonicStorageModule.forRoot({
      name: "__hapyDB",
      driverOrder: ["indexeddb", "sqlite", "websql"]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AuthLoginPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SplashPage,
    TabsPage
  ],
  providers: [
    BaseDB,
    ComponentactionsProvider,
    Facebook,
    Firebase,
    HttpClient,
    InAppBrowser,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ComponentactionsProvider,
    ContinentsProvider,
    HttprequestsProvider
  ]
})
export class AppModule { }
