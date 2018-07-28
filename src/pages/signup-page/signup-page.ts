import { Component } from '@angular/core';
import { AlertController, NavController, LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { Popservice } from '../../providers/popservice';
import { HomePage } from '../home/home';
import { environment } from '../../config/environment';

let termsurl = environment.termsurl;

@Component({
  selector: 'signup-page',
  templateUrl: 'signup-page.html'
})
export class SignupPage {

  role: string;
  email: string;
  password: string;
  loading : any;

  constructor(public navCtrl: NavController, 
		public authService: Auth, 
		public alertCtrl: Popservice, 
		public loadingCtrl: LoadingController) {

     this.role = 'creator';
  }

  ionViewDidLoad() {

  }
 


  register(){

    this.showLoader();

  	let details = {
  	    email: this.email,
  	    password: this.password,
  	    role: this.role,
  	};

  	this.authService.createAccount(details).then((result) => {
      this.loading.dismiss();
      console.log(result);
      this.navCtrl.push(HomePage);
  	}, (err) => {
                
  		this.loading.dismiss();
                console.log (err);
                if(typeof err._body == 'string' && JSON.parse(err._body).error) {
                this.alertCtrl.presentAlert("Unable to create account: " + 
			JSON.parse(err._body).error);
                }
                else {
                this.alertCtrl.presentAlert("Unable to create account");
                }
  	});

  }

  showLoader(){

    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();

  }

}
