import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VisitorListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visitor-list',
  templateUrl: 'visitor-list.html',
})
export class VisitorListPage {
 
  allvisitors: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.allvisitors = [
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
    console.log('ionViewDidLoad VisitorListPage');
  }

}
