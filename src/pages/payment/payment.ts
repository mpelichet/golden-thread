import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl: ViewController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
 

}
