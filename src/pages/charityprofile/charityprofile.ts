import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the CharityprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charityprofile',
  templateUrl: 'charityprofile.html',
})
export class CharityprofilePage {

  public charity: Charity;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalCtrl: ModalController) {
      this.charity = this.navParams.get("charity");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityprofilePage');
  }

  presentPayment() {
    let modal = this.modalCtrl.create(PaymentPage);
    modal.present();
  }
  



}
