import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { BookingService } from '../../providers/booking';
import { Popservice } from '../../providers/popservice';
/**
 * Generated class for the PaymentIssuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-room',
  templateUrl: 'booking-room.html',
})
export class BookingRoomPage {


  loading: any;
  endtime: any;
  starttime: any;
  bookingdate: any;
  bookingdata: any;
  rooms: any;
  bookings: any;
  booking: any;

  constructor(public navCtrl: NavController, 
              public loadingCtrl: LoadingController,
              public bookingService: BookingService,
              public alertCtrl: Popservice,
              public navParams: NavParams) {

    this.bookingdata = {
            // bookingid: '',
            roomname: '',
            bookingdate: '',
	    starttime: '',
            endtime: ''
    };

    this.bookingdate = '';
    this.starttime = '';
    this.endtime = '' ;

    this.rooms = [
	{name: 'MR101', phone: '4567878990'},
	{name: 'MR102', phone: '9897878990'}
    ];
    this.bookings = [];
    this.getBookings(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentIssuePage');
  }

  showLoader(){

    this.loading = this.loadingCtrl.create({
      content: 'Working...'
    });

    this.loading.present();

  }
  selectroom(room) {
    this.bookingdata.roomname = room.name;

  }

  bookroom() {
    if(this.bookingdate == '' )
    {
	return alert('enter booking date');
    }

    if(this.starttime == '' || this.endtime == '')
    {
	return alert('enter start/end time');
    }
    this.bookingdata.bookingdate = this.bookingdate;
    this.bookingdata.starttime = this.starttime;
    this.bookingdata.endtime = this.endtime;
    this.createBooking() ;

  }

  createBooking() {
    this.showLoader();

   this.bookingService.createBooking(this.bookingdata).then((result) => {
                this.loading.dismiss();
                this.booking = result;
                                        console.log("booking done");
 		this.alertCtrl.presentAlert("Booking done");
                                }, (err) => {
                this.loading.dismiss();
                                        console.log("booking failed");
 		this.alertCtrl.presentAlert("Booking failed");
                                });
  }
  getBookings() {


   this.bookingService.getBookings().then((result: Array<any>) => {
                this.bookings = result;
                console.log("got bookings");
                       }, (err) => {
                console.log("no bookings");
                });

  }

/*
  checkFunds() {
    var fundaddress = '2N5ZyMz5xmt47znM9CCKnrLbXmymGLknus9';
    this.bitcoinService
      .getBalances(fundaddress).then(posts  => {
      this.balance = posts;
    }, error => {
        console.log(error);
    });
  }
 
  createPIN()
  {
    var length = 5;
    this.paymentdata.paymentpin  = Math.random().toString().substr(2, length);
  }
  createAccesskey()
  {
    var length = 10;
    this.paymentdata.paymentaccesskey  = "AXS"+Math.random().toString(36).substr(2, length).toUpperCase();
  }
  
  
  createPaymentId()
  {
    this.paymentdata.paymentkey = this.bitcoinService.getRandomPubkey();
    this.paymentdata.paymentid = "AX_"+this.paymentdata.paymentkey.substr(0, 9).toUpperCase();
  }
  
  getplandata (planid)
  {
    for(var i=0; i< this.availablePlans.length; i++)
    {
	if(this.availablePlans[i].planid == planid)
        {
	 return this.availablePlans[i];
        }
    }
  }

  createPayment() {
    this.showLoader();

//   var p1 = this.getplandata(this.paymentdata.paymentplanid);
   this.paymentdata.paymentplan = "JSON.stringify(p1)";
   this.paymentdata.vendorid = "p1.vendorid";

   this.paymentService.createPayment(this.paymentdata).then((result) => {
                this.loading.dismiss();
                this.payment = result;
                                        console.log("payment created");
                                }, (err) => {
                this.loading.dismiss();
 		//this.alertCtrl.presentAlert(JSON.parse(err._body).error);
                                        console.log("not allowed"+ err);
                                });
  }

  getPayment() {
    this.showLoader();

   var paymentdata = {
        name: 'test'
   };
   this.paymentService.getPaymentMade(paymentdata).then((result) => {
                this.loading.dismiss();
                this.payment = result;
                                        console.log("payment created");
                                }, (err) => {
                this.loading.dismiss();
                                        console.log("not allowed"+ err);
                                });
  }

  getAvailableSchemes() {

   var vendorid = 10;

   this.managerService.getAvailableSchemes(vendorid).then((result) => {
                this.availableSchemes = result;
                console.log("got plans");
                       }, (err) => {
                console.log("getting plans failed "+ err);
                });
  }
  
  

  getAvailablePlans() {

   var vendorid = 10;

   this.managerService.getAvailablePlans(vendorid).then((result: Array<any>) => {
                this.availablePlans = result.map(function(x) {

                       var p = JSON.parse(x.serverdata);
                       return p; //{planname: p.planname, plainid: p.planid}
                       } );

                console.log("got plans");
                       }, (err) => {
                console.log("getting plans failed "+ err);
                });
  }
  
  activatePayment(payment){

    this.showLoader();

    var pauseactivate = {
	activate : true,
	pause: false,
        paymentid : 1
    };

    this.paymentService.pauseActivatePayment(pauseactivate).then((result) => {

      this.loading.dismiss();

      //Remove locally
                let index = this.payments.indexOf(payment);

                if(index > -1){
                        this.payments.splice(index, 1);
                }

    }, (err) => {
      this.loading.dismiss();
        console.log("not allowed");
    });
  }

  pausePayment(payment){

    this.showLoader();

    var pauseactivate = {
	activate : false,
	pause: true,
        paymentid : 1
    };

    this.paymentService.pauseActivatePayment(pauseactivate).then((result) => {

      this.loading.dismiss();

      //Remove locally
                let index = this.payments.indexOf(payment);

                if(index > -1){
                        this.payments.splice(index, 1);
                }

    }, (err) => {
      this.loading.dismiss();
        console.log("not allowed");
    });
  }
  
  getPaymentBalance(payment){

    this.showLoader();

    var paymentdata = {
        activate : false,
        pause: true,
        paymentid : 1
    };

    this.paymentService.getPaymentBalance(paymentdata).then((result) => {

      this.loading.dismiss();
      this.balance = result;


    }, (err) => {
      this.loading.dismiss();
        console.log("not allowed");
    });
  }
*/


  
}
