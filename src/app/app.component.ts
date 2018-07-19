import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BalancesPage } from '../pages/balances/balances';
import { SerlessettingPage } from '../pages/serlessetting/serlessetting';
import { CouponsPage } from '../pages/coupons/coupons';
import { PaymentsmadePage } from '../pages/paymentsmade/paymentsmade';
import { PaymentsreceivedPage } from '../pages/paymentsreceived/paymentsreceived';
import { PlansPage } from '../pages/plans/plans';
import { CouponIssuePage } from '../pages/coupon-issue/coupon-issue';
import { PaymentIssuePage } from '../pages/payment-issue/payment-issue';
import { CouponRedeemPage } from '../pages/coupon-redeem/coupon-redeem';
import { PaymentAcceptPage } from '../pages/payment-accept/payment-accept';
import { ServerlessSendPage } from '../pages/serverless-send/serverless-send';
import { ServerlessReceivePage } from '../pages/serverless-receive/serverless-receive';
import { CouponAdminPage } from '../pages/coupon-admin/coupon-admin';
import { LoginPage } from '../pages/login-page/login-page';
import { SignupPage } from '../pages/signup-page/signup-page';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, parent: string, component: any, open: string, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation


    this.pages = [
      { title: 'Profile', component: HomePage, parent: '', open: "true" , icon: 'home' },
      { title: 'Signup', component: SignupPage,  parent: '', open: "true",icon: 'home' },
      { title: 'Login', component: LoginPage, parent: '',  open: "true",icon: 'home' },
      { title: 'Divider', component: '' , parent: '',  open: "true",icon: 'none' },
      { title: 'Company Details', component: HomePage,parent: 'Company Details',   open: "false",icon: 'home' },
      { title: 'Company ', component: HomePage,parent: 'Company Details',  open: "false", icon: 'home' },
      { title: 'Employee ', component: HomePage,parent: 'Company Details',  open: "false", icon: 'home' },
      { title: 'Financial ', component: HomePage,parent: 'Company Details',  open: "false", icon: 'home' },
      { title: 'Bills ', component: HomePage,parent: 'Company Details',  open: "false", icon: 'home' },
      { title: 'Payments ', component: HomePage,parent: 'Company Details', open: "false",  icon: 'home' },

      { title: 'Divider', component: '' ,parent: '',  open: "true", icon: 'none' },
      { title: 'Booking', component: HomePage,parent: '',  open: "true", icon: 'home' },
      { title: 'Member Forum', component: HomePage,parent: '',  open: "true", icon: 'home' },
      { title: 'Divider', component: '' ,parent: '',  open: "true", icon: 'none' },
      { title: 'Visitor management ', component: HomePage,parent: '',  open: "true", icon: 'home' },
      { title: 'Visitor list ', component: HomePage,parent: '',  open: "false", icon: 'home' },
      { title: 'Visitor expected ', component: HomePage,parent: '',  open: "false", icon: 'home' },
      { title: 'Tickets ', component: HomePage,parent: '', open: "true",  icon: 'home' },
      { title: 'Help ', component: HomePage,parent: '',  open: "true", icon: 'home' },
      { title: 'Logout ', component: HomePage,parent: '',  open: "true", icon: 'home' },

      { title: 'Divider', component: '',parent: '', open: "true",  icon: 'none' }
    ];
/*

    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Signup', component: SignupPage, icon: 'home' },
      { title: 'Login', component: LoginPage, icon: 'home' },
      { title: 'Divider', component: '' , icon: 'none' },
      { title: 'Payment Issue', component: PaymentIssuePage, icon: 'contact' },
      { title: 'Payments made', component: PaymentsmadePage, icon: 'contact' },
      { title: 'Divider', component: '' , icon: 'none' },
      { title: 'Client Web/Mobile', component: PaymentAcceptPage, icon: 'contact' },
      { title: 'Serverless Send', component: ServerlessSendPage, icon: 'contact' },
      { title: 'Serverless Receive', component: ServerlessReceivePage, icon: 'contact' },
      { title: 'Serverless setting', component: SerlessettingPage, icon: 'contact' },
      { title: 'Received payments ', component: PaymentsreceivedPage, icon: 'contact' },
      { title: 'Divider', component: '', icon: 'none' },
      { title: 'Vendor Admin ', component: CouponAdminPage, icon: 'contact' },
      { title: 'Vendor Plans ', component: PlansPage, icon: 'contact' },
      { title: 'Vendor Balances ', component: BalancesPage, icon: 'contact' },
      { title: 'Divider', component: '', icon: 'none' }
    ];
*/

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  togglesection(page)
  {
     var newstate ;
    if(page.open == "true") newstate = "false";
    else if(page.open == "false") newstate = "true";
      
	for(var i=0; i< this.pages.length; i++)
        {
		if(this.pages[i].parent == page.title)
                {
		  this.pages[i].open = newstate;
                }
        }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title == page.parent)
    {
	this.togglesection(page);
    }
    else {
    this.nav.setRoot(page.component);
    }
  }

}
