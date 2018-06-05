import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { User } from '../../models/user';
import { PaymentPage } from '../payment/payment';
import { PortfolioPage } from '../portfolio/portfolio'

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
  public user = new User(); 
  public profilecharities: Array<Charity> = [];

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

  addToPortfolio(charity){
    this.profilecharities.push(charity);
    this.user.charities  = Object.assign([], this.profilecharities);
    this.navCtrl.push(PortfolioPage, {
      charities:this.user.charities
    });
    // for (var i = 0; i < this.profilecharities.length; i++){
    //   this.user.charities[i] = this.profilecharities[i];
    // }
  }
  

}
