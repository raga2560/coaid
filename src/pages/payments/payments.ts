import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {

  payments: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.payments = [
  {
  billname: 'MR201 room charges',
  billamount: '10000',
  billdate: '10/01/2018',
  duedate: '12/01/2018',
  receiveddate: '11/01/2018'
  },
  {
  billname: 'Monthly rent sept 2018 ',
  billamount: '7000',
  billdate: '10/01/2018',
  duedate: '12/01/2018',
  receiveddate: '11/01/2018'
  }

  ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
  }

}
