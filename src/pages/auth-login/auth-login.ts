import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular/components/slides/slides';
import { ContinentsProvider } from '../../providers/continents/continents';
import { Continents } from '../../providers/models/login';
import { TabsPage } from '../tabs/tabs';
import { UsersModel } from '../../providers/models/user/users';
import { BaseDB } from '../../providers/sqlDB/base';

@IonicPage()
@Component({
  selector: 'page-auth-login',
  templateUrl: 'auth-login.html',
})
export class AuthLoginPage implements OnInit {
  countryItems: any[] = [];
  private loginForm: FormGroup;
  private singupForm: FormGroup;
  private verificationcodeForm: FormGroup;
  signupusingtext: string = "Email-ID";
  isCountryActive: boolean = false;
  usernametype: string = "email";
  showedit: boolean = false;
  mobilenumber: number;
  verifymobilecode: number;
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private continents: ContinentsProvider,
    private baseDB: BaseDB) {
    this.loginForm = this.formBuilder.group({
      mobilenumber: ["", Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      country: ["", Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(5)])],
    });

    this.singupForm = this.formBuilder.group({
      signupwith: ["", Validators.compose([Validators.required, Validators.maxLength(15)])],
      country: ["", Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(5)])],
      username: ["", Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
      name: ["", Validators.compose([Validators.required, Validators.maxLength(15)])],
      age: ["", Validators.compose([Validators.required, Validators.maxLength(2)])],
      gender: ["", Validators.compose([Validators.required, Validators.maxLength(8)])]
    });

    this.verificationcodeForm = this.formBuilder.group({
      verificationcode: ["", Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])]
    });
  }



  hapySignUp(): void {
    this.slides.slideTo(2);
  }

  openForm(pageOpen: string): void {
    switch (pageOpen) {
      case "login":
        this.slides.slideTo(0);
        this.showedit = false;
        break;
      case "signup":
        this.slides.slideTo(1);
        break;
      default:
        this.slides.slideTo(0);
        break;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthLoginPage');
    this.signUpTextSet();
  }

  signUpTextSet() {
    if (this.signupusingtext == "Mobile Number") {
      this.isCountryActive = !this.isCountryActive;
      this.continents.getAllContinents().then((res) => {
        //this.countryItems = res;
        this.singupForm.patchValue({ country: "" });
        this.usernametype = "number";
      });
    } else {
      this.isCountryActive = false;
      this.usernametype = "email";
      this.singupForm.patchValue({ country: "0" });
    }
    this.singupForm.patchValue({ username: "" });
  }

  signupUsing(val: any): void {
    let signupwithText = val._text;
    this.signupusingtext = signupwithText;
    switch (signupwithText) {
      case "Mobile Number":
        this.signUpTextSet();
        break;
      case "Google Account":
        this.signUpTextSet();
        break;
      case "Facebook Account":
        this.signUpTextSet();
        //this.fbLogin();
        break;
      default:
        break;
    }
  }

  hapyLogin(): void {
    this.slides.slideTo(2);
    this.verifymobilecode = this.mobilenumber;
    this.showedit = true;
  }

  verificationcodeSignUp(): void {
    let users = new UsersModel();
    users.contactNumber = this.mobilenumber;
    users.status = true;
    users.blocked = false;
    this.baseDB.insertToDB("user", users);
    this.navCtrl.setRoot(TabsPage, { opencontactpage: true });
  }

  ngOnInit(): void {
    this.continents.getAllContinents().then((res: Continents[]) => {
      this.countryItems = res.filter((v) => {
        return v.callingCodes[0].length > 0;
      });
    });
  }

  // fbLogin(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.fb.login(['public_profile', 'user_friends', 'email'])
  //       .then((res: FacebookLoginResponse) => {
  //         console.log(res);
  //         resolve(res);
  //       }).catch();
  //   });
  // }
}