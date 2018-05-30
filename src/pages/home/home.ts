import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../registration/registration';


/**?TypeScript Feature add meta data to typescript code*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    /**How we can inject pieces of reusable code into  */
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  navigateToLogin(){
      /**pushes a new page into stack*/
      this.navCtrl.push(LoginPage);
  }

  navigateToRegister(){
    /**pushes a new page into stack*/
    this.navCtrl.push(RegisterPage);
  }

}
