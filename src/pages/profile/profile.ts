import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { CharityPage } from '../charity/charity';
import { NavController, NavParams } from 'ionic-angular';

/**?TypeScript Feature add meta data to typescript code*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  /**How we can inject pieces of reusable code into  */
  public username: string;
  public password: string;
  public passwordverify: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.username = this.navParams.get("username");
    this.password = this.navParams.get("password");
    this.passwordverify = this.navParams.get("passwordverify");
  }

  popToRoot(){
    /**pushes a new page into stack*/
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

  viewCharities(){
    /**pushes a new page into stack*/
    this.navCtrl.push(CharityPage);
}

}
