import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';
import { Popservice } from '../../providers/popservice';

import { SignupPage } from '../signup-page/signup-page';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage {

	email: string;
	password: string;
	loading: any;

	constructor(public navCtrl: NavController, 
                 public alertCtrl: Popservice,
		public authService: Auth, public loadingCtrl: LoadingController) {

	}

	ionViewDidLoad() {

		this.showLoader();

		//Check if already authenticated
		this.authService.checkAuthentication().then((res) => {
			console.log("Already authorized");
			this.loading.dismiss();
			this.navCtrl.setRoot(HomePage);
		}, (err) => {
			console.log("Not already authorized");
			this.loading.dismiss();
		});

	}

    login(){
 
    	this.showLoader();

        let credentials = {
            email: this.email,
            password: this.password
        };
 
        this.authService.login(credentials).then((result) => {
        	this.loading.dismiss();
            console.log(result);
        	this.navCtrl.setRoot(HomePage);
        }, (err) => {
        	this.loading.dismiss();
                console.log (err);
                if(typeof err._body == 'string' ) {
                this.alertCtrl.presentAlert("Login failed: " + err._body);
                }
                else {
                this.alertCtrl.presentAlert("Login failed");
                }

        });
 
    }
 
    launchSignup(){
        this.navCtrl.push(SignupPage);
    }

    showLoader(){

		this.loading = this.loadingCtrl.create({
			content: 'Authenticating...'
		});

		this.loading.present();

    }

}
