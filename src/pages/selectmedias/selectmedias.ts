import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {
  MediaCapture, MediaFile, MediaFileData, CaptureVideoOptions, CaptureError,
  CaptureAudioOptions
} from '@ionic-native/media-capture';


@IonicPage()
@Component({
  selector: 'page-selectmedias',
  templateUrl: 'selectmedias.html',
})

export class SelectmediasPage implements OnInit {

  mediaList: any[] = [];
  title: string;
  isImageActive: boolean = false;
  accessFor: string = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private imagePicker: ImagePicker,
    private viewCtrl: ViewController, private camera: Camera, private mediaCapture: MediaCapture) {
    this.title = "Media";
    this.isImageActive = false;
  }

  ngOnInit(): void {
    let mediatype = this.navParams.get("mediatype");
    this.accessFor = mediatype;
    // switch (mediatype) {
    //   case "images":
    //     this.checkPermissionGetImages();
    //     break;
    //   case "opencamera":
    //     this.checkPermissionGetImages();
    //     break;
    //   case "video":
    //     this.checkPermissionGetImages();
    //     break;
    //   case "recordvideo":
    //     this.checkPermissionGetImages();
    //     break;
    //   default:
    //     this.viewCtrl.dismiss({ status: 2, error: "No mediatype defined." });
    //     break
    // }
    this.checkPermissionGetImages().then(res => {
      this.viewCtrl.dismiss(res);
    });
  }

  checkPermissionGetImages(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.imagePicker.hasReadPermission().then((res) => {
        if (res) {
          this.openModule(this.accessFor).then((res) => {
            resolve(res);
          });
        } else {
          this.imagePicker.requestReadPermission().then((res) => {
            this.openModule(this.accessFor).then((res) => {
              resolve(res);
            });
          }).catch((err) => {
            resolve({ status: 0, error: "error while accessing the file.", syserr: err });
          });
        }
      }).catch(() => {
        this.imagePicker.requestReadPermission().then(() => {
          this.openModule(this.accessFor).then((res) => {
            resolve(res);
          });
        }).catch((err) => {
          resolve({ status: 0, error: "error while accessing the file.", syserr: err });
        });
      });
    });
  }

  private openModule(moduletype: string): Promise<any> {
    return new Promise((resolve, reject) => {
      switch (moduletype) {
        case "images":
          this.getImages().then(res => {
            resolve(res);
          });
          break;
        case "opencamera":
          this.openCamera().then(res => {
            resolve(res);
          });
          break;
        case "video":
          this.getVideo().then(res => {
            resolve(res);
          });
          break;
        case "recordvideo":
          this.getImages().then(res => {
            resolve(res);
          });
          break;
        default:
          resolve(null);
          break;
      }
    });
  }

  openCamera(): Promise<any> {
    return new Promise((resolve, reject) => {
      let cameraOptions: CameraOptions;
      cameraOptions = {
        quality: 100,
        destinationType: 0,
        sourceType: 1,
        allowEdit: true,
        encodingType: 1
      }
      this.camera.getPicture(cameraOptions).then((res) => {
        let png = "data:image/png;base64,";
        let encodeString = png + res;
        this.mediaList.push({ image: encodeString, type: "image" });
        resolve({ status: 1, lib: this.mediaList });
      }).catch(err => {
        reject({ status: 0, error: "error while accessing the file.", syserr: err });
      });
    });
  }

  getVideo(): Promise<any> {
    return new Promise((resolve, reject) => {
      let videoOption: CaptureVideoOptions = {
        limit: 5
      };
      this.mediaCapture.captureVideo(videoOption).then((res) => {
        
      });
    });
  }

  getImages(): Promise<any> {
    return new Promise((resolve, reject) => {
      let option: ImagePickerOptions = {
        maximumImagesCount: 15
      };
      this.imagePicker.getPictures(option).then((results) => {
        for (var i = 0; i < results.length; i++) {
          this.mediaList.push({ image: results[i], type: "image" });
        }
        resolve({ status: 1, lib: this.mediaList });
      }, (err) => {
        reject({ status: 0, error: "error while accessing the file.", syserr: err });
      });
    });
  }

  ionViewDidLoad() {

  }
}