import { Component } from '@angular/core';
import { AlertController, NavController, LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';


import { Popservice } from '../../providers/popservice';


/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

    loading : any;


    constructor(public navCtrl: NavController, 
		public alertCtrl: Popservice,
		public authService: Auth, 
		public loadingCtrl: LoadingController) {

        }

        ionViewDidLoad() {

                this.showLoader();

                //Check if already authenticated
                this.authService.checkAuthentication().then((res) => {
                        console.log("Already authorized");
                        this.loading.dismiss();
                }, (err) => {
                        
                        console.log("Not already authorized");
                        this.loading.dismiss();
                         this.alertCtrl.presentAlert("Already logged out");
                        this.navCtrl.setRoot(HomePage);
                });

        }

    logout(){
                this.authService.logout();
                this.navCtrl.setRoot(HomePage);
    }
   showLoader(){

    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();

  }



}
