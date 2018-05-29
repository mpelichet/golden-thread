import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**?TypeScript Feature add meta data to typescript code*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
    /**How we can inject pieces of reusable code into  */
  constructor(public navCtrl: NavController) {
  }

  popToRoot(){
    /**pushes a new page into stack*/
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

}
