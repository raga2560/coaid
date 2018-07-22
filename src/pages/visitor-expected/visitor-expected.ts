import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VisitorExpectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visitor-expected',
  templateUrl: 'visitor-expected.html',
})
export class VisitorExpectedPage {
  
  expectedvisitors: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.expectedvisitors = [
  {
  name: 'Rajesh',
  datetime: '12/01/2018, 8.30 AM'
  },
  {
  name: 'Rajesh kumar',
  datetime: '12/01/2018, 8.30 AM'
  }

  ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitorExpectedPage');
  }

}
