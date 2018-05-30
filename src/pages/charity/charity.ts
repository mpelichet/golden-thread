import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharityprofilePage } from '../charityprofile/charityprofile';

/**
 * Generated class for the CharityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charity',
  templateUrl: 'charity.html',
})
export class CharityPage {

  charities: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charities = [
      {name: "Rhino", description: "Testing"},

      // 'Breadline Africa',
      // 'Message South Africa',
      // 'Help the Rural Child',
      // 'CHOSA South Africa'
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityPage');
  }

  viewCharities(charity) {
    /**pushes a new page into stack*/
    this.navCtrl.push(CharityprofilePage, {
      charity: charity
    });
  }



}
