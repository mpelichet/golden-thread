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

    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Dog Poaching";
    charity2.description = "Save the Dogs!";
    charity2.url = "http://www" ;
    charity2.image = "https://"; 
    charity2.donationgoal = 5000; 

    var charity3 = new Charity();
    charity3.id = 3;
    charity3.name = "Ostrich Poaching";
    charity3.description = "Save the Ostrichs!";
    charity3.url = "http://www" ;
    charity3.image = "https://"; 
    charity3.donationgoal = 5000; 

    this.charities.push(charity1); 
    this.charities.push(charity2); 
    this.charities.push(charity3); 

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
