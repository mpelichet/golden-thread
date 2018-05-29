import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**?TypeScript Feature add meta data to typescript code*/
@Component({
  selector: 'page-register',
  templateUrl: 'registration.html'
})
export class RegisterPage {
    /**How we can inject pieces of reusable code into  */
  constructor(public navCtrl: NavController) {
  }

  navigateToProfile(){
    /**pushes a new page into stack*/
    this.navCtrl.push(ProfilePage);
  }
}
