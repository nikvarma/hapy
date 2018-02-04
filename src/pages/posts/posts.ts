import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { EmojisPage } from '../emojis/emojis';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { NearbyLocationsPage } from '../nearby-locations/nearby-locations';
import { BackgroundcolorPickerPage } from '../backgroundcolor-picker/backgroundcolor-picker';
import { SelectmediasPage } from '../selectmedias/selectmedias';
import { MediaviewersmallComponent } from '../../components/mediaviewersmall/mediaviewersmall';

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
  viewProviders: [MediaviewersmallComponent]
})
export class PostsPage {
  addFeeling: string;
  isFeelingAdded: boolean = false;
  addLocation: string;
  isLocationAdded: boolean = false;
  addBgColor: string;
  isBgColorAdded: boolean = false;
  mediaList: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
    private alertCtrl: AlertController, private modalCtrl: ModalController) {
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  postWritting(event: any): void {
    if (event.key == "@" && event.keyCode === 64) {
      this.postOpenFriendList();
    }
  }

  postOpenFriendList() {
    let alert = this.alertCtrl.create();
    //alert.setTitle("");
    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
  }

  postColor(): void {
    let bgColor = this.modalCtrl.create(BackgroundcolorPickerPage);
    bgColor.onDidDismiss(data => {
      let postContent = document.getElementById("postcontainer");
      if (typeof data != "undefined") {
        //this.addBgColor = "style='background:" + data.bgcolor + "';color: white;";
        postContent.style.background = data.bgcolor;
        postContent.style.color = "white";
      } else {
        postContent.style.background = "transparent";
        postContent.style.color = "inherit";
      }
      console.log(data);
    });
    bgColor.present();
  }

  emojiAdd(): void {
    //this.navCtrl.push(EmojisPage);
    let modalEmoji = this.modalCtrl.create(EmojisPage);
    modalEmoji.onDidDismiss(data => {
      if (typeof data != "undefined") {
        this.addFeeling = (typeof data.emoji != "undefined") ? data.emoji : null;
        this.isFeelingAdded = data.isemoji;
      }
    });
    modalEmoji.present();
  }

  postLocation(): void {
    let nearLocations = this.modalCtrl.create(NearbyLocationsPage);
    nearLocations.onDidDismiss(data => {
      if (typeof data != "undefined" || typeof data != null) {
        this.addLocation = (typeof data.structured_formatting != "undefined") ? data.structured_formatting.main_text : "";
        this.isLocationAdded = true;
      }
      //console.log(data);
    });
    nearLocations.present();
  }

  publishPost(): void {

  }

  postContact(): void {

  }

  postVideo(): void {
    let vidoAlert = this.alertCtrl.create({
      title: "Video",
      message: "Record Video or Slect from gallary",
      cssClass: "comman-alert",
      buttons: [
        {
          text: "Record",
          handler: () => {

          }
        },
        {
          text: "Gallary",
          handler: () => {

          }
        }
      ]
    });
    vidoAlert.present();
  }

  postImage(): void {
    let imageAlert = this.alertCtrl.create({
      title: "Images",
      message: "Select image or open camera",
      cssClass: "comman-alert",
      buttons: [
        {
          text: "Camera",
          handler: () => {
            let media = this.modalCtrl.create(SelectmediasPage, {
              mediatype: "opencamera"
            });
            media.present();
            media.onDidDismiss(data => {
              if (data.status == 1) {
                this.mediaList.push({ media: data.lib, type: "images" });
              }
              console.log(data);
            });
          }
        },
        {
          text: "Gallary",
          handler: () => {
            let media = this.modalCtrl.create(SelectmediasPage, {
              mediatype: "images"
            });
            media.present();
            media.onDidDismiss(data => {
              this.mediaList.push({ media: data.lib, type: "images" });
              console.log(data);
            });
          }
        }
      ]
    });
    imageAlert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }

}
