import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';


@IonicPage()
@Component({
  selector: 'page-selectmedias',
  templateUrl: 'selectmedias.html',
})
export class SelectmediasPage implements OnInit {
  mediaList: any[] = [];
  title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private imagePicker: ImagePicker) {
    this.title = "Images";
  }

  ngOnInit(): void {
    let option: ImagePickerOptions = {
      maximumImagesCount: 15
    }
    this.imagePicker.getPictures(option).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.mediaList.push({ image: results[i] });
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectmediasPage');
  }

}
