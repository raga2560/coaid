import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {
  
  tickets: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.tickets = [
  {
  ticketid: '10718',
  title: 'Server down',
  desc: 'Since 3 days server is not responding'
  },
  {
  ticketid: '10738',
  title: 'Laptop down',
  desc: 'Since 1 days not responding'
  }
  
  ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

}
