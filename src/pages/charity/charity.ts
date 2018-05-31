import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharityprofilePage } from '../charityprofile/charityprofile';
import { Charity } from '../../models/charity';

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

  public charities: Array<Charity> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var charity1 = new Charity();
    charity1.id = 1;
    charity1.name = "Rhino Poaching";
    charity1.description = "Save the Rhinos!";
    charity1.url = "http://www.stoprhinopoaching.com/" ;
    charity1.image = "https://i.pinimg.com/originals/21/a7/63/21a763d382d95e9eb89f5fb7381e4b06.jpg"; 
    charity1.donationgoal = 5000; 

    this.charities.push(charity1); 

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
