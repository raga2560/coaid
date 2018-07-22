import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bills',
  templateUrl: 'bills.html',
})
export class BillsPage {
  
  bills: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.bills = [
  {
  billname: 'MR201 room charges',
  billamount: '10000',
  duedate: '12/01/2018',
  billdate: '10/01/2018'
  },
  {
  billname: 'Monthly rent sept 2018 ',
  billamount: '7000',
  duedate: '12/01/2018',
  billdate: '10/01/2018'
  }

  ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillsPage');
  }

}
