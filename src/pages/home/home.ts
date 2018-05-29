import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**?TypeScript Feature add meta data to typescript code*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    /**How we can inject pieces of reusable code into  */
  constructor(public navCtrl: NavController) {

  }

  navigateToLogin(){
      /**pushes a new page into stack*/
      this.navCtrl.push(LoginPage);
  }

}
