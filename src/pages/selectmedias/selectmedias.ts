import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { ViewController } from 'ionic-angular/navigation/view-controller';


@IonicPage()
@Component({
  selector: 'page-selectmedias',
  templateUrl: 'selectmedias.html',
})
export class SelectmediasPage implements OnInit {
  mediaList: any[] = [];
  title: string;
  isImageActive: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private imagePicker: ImagePicker,
    private viewCtrl: ViewController) {
    this.title = "Media";
    this.isImageActive = false;
  }

  ngOnInit(): void {
    let mediatype = this.navParams.get("mediatype");
    switch (mediatype) {
      case "images":
        this.checkPermissionGetImages();
        break;
      default:
        this.viewCtrl.dismiss({ status: 2, error: "No mediatype defined." });
        break
    }
  }

  checkPermissionGetImages(): Promise<any> {
    return new Promise(() => {
      this.imagePicker.hasReadPermission().then((res) => {
        if (res) {
          this.getImages();
        } else {
          this.imagePicker.requestReadPermission().then((res) => {
            this.getImages();
          }).catch(() => {
            this.viewCtrl.dismiss({ status: 0, error: "error while accessing the file." });
          });
        }
      }).catch(() => {
        this.imagePicker.requestReadPermission().then(() => {
          this.getImages();
        }).catch(() => {
          this.viewCtrl.dismiss({ status: 0, error: "error while accessing the file." })
        });
      });
    });
  }

  getImages(): Promise<any> {
    return new Promise(() => {
      let option: ImagePickerOptions = {
        maximumImagesCount: 15
      }
      this.imagePicker.getPictures(option).then((results) => {
        for (var i = 0; i < results.length; i++) {
          this.mediaList.push({ image: results[i] });
        }
        this.viewCtrl.dismiss({ status: 1, lib: this.mediaList });
      }, (err) => {
        this.viewCtrl.dismiss({ status: 0, error: "error while accessing the file." })
      });
    });
  }

  ionViewDidLoad() {

  }
}