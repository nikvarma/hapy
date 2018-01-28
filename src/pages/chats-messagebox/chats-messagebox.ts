import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@IonicPage()
@Component({
  selector: 'page-chats-messagebox',
  templateUrl: 'chats-messagebox.html',
})
export class ChatsMessageboxPage {
  uname: string;
  uid: number;
  chatBox: any[] = [];
  selectOptions: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private actionSheetCtrl: ActionSheetController, private viewCtrl: ViewController) {
    this.uname = navParams.get("uname");
    this.uid = navParams.get("uid");
    this.chatBox.push({ chatBox: "" });
  }

  userInfo(): void {

  }

  dismissModal(): void {
    this.viewCtrl.dismiss();
  }

  sendChat(event: Event): boolean {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  selectOption(): void {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Attachement',
          role: 'attachement',
          icon: 'document',
          cssClass: 'attachement attach-color',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Contact',
          icon: 'contact',
          cssClass: 'contact contact-color',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Image',
          icon: 'image',
          cssClass: 'image image-color',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Location',
          icon: 'navigate',
          cssClass: 'navigate navigate-color',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close-circle',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  call(): void {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsMessageboxPage');
  }

  tapEvent(e): void {

  }

}
