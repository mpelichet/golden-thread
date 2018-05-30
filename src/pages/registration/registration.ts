import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProfilePage } from "../profile/profile";

/**TypeScript Feature add meta data to typescript code*/
@Component({
  selector: 'page-register',
  templateUrl: 'registration.html'
})

export class RegisterPage {
  public username: string;
  public password: string;
  public passwordverify: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  register(){
    this.navCtrl.push(ProfilePage, {
      username: this.username,
      password: this.password,
      passwordverify: this.passwordverify
    });
  }
}
