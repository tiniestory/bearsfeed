import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl   : NavController, 
    public navParams : NavParams
  ) {}

  ionViewDidLoad() {}

  doSignup() {
    this.navCtrl.push(SignupPage);
  }

}