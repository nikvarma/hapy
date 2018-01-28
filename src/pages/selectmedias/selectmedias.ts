import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-selectmedias',
  templateUrl: 'selectmedias.html',
})
export class SelectmediasPage implements OnInit {
  
  title:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = "Images";
  }

  ngOnInit(): void {
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectmediasPage');
  }

}
