import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ComponentsModule } from '../components/components.module';


import { DirectivesModule } from '../directives/directives.module';
import { QRCodeModule } from 'angular2-qrcode';
import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { ThreadsPageModule } from '../pages/threads/threads.module';
import { ThreadCommentsPageModule } from '../pages/thread-comments/thread-comments.module';
import { ThreadCreatePageModule } from '../pages/thread-create/thread-create.module';
import { ListPageModule } from '../pages/list/list.module';
import { IonicStorageModule } from '@ionic/storage';
import { LoginPage } from '../pages/login-page/login-page';
import { SignupPage } from '../pages/signup-page/signup-page';
import { Todos } from '../providers/todos';
import { Planmanager } from '../providers/planmanager';
import { Coupon } from '../providers/coupon';
import { Auth } from '../providers/auth';
import { Bitcoin } from '../providers/bitcoin';
import { Popservice } from '../providers/popservice';
import { Payment } from '../providers/payment';
import { Serverless } from '../providers/serverless';
import { ServerlessWallet } from '../providers/serverlesswallet';
import { ServerlessTransaction } from '../providers/serverlesstransaction';
import { ServerlessPayment } from '../providers/serverlesspayment';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProfileFivePageModule } from '../pages/profile-five/profile-five.module';
import { CouponIssuePageModule } from '../pages/coupon-issue/coupon-issue.module';
import { PaymentIssuePageModule } from '../pages/payment-issue/payment-issue.module';
import { BookingRoomPageModule } from '../pages/booking-room/booking-room.module';
import { PlansPageModule } from '../pages/plans/plans.module';
import { CouponRedeemPageModule } from '../pages/coupon-redeem/coupon-redeem.module';
import { PaymentAcceptPageModule } from '../pages/payment-accept/payment-accept.module';
import { ServerlessSendPageModule } from '../pages/serverless-send/serverless-send.module';
import { ServerlessReceivePageModule } from '../pages/serverless-receive/serverless-receive.module';
import { CouponAdminPageModule } from '../pages/coupon-admin/coupon-admin.module';
import { CouponsPageModule } from '../pages/coupons/coupons.module';
import { PaymentsmadePageModule } from '../pages/paymentsmade/paymentsmade.module';
import { PaymentsreceivedPageModule } from '../pages/paymentsreceived/paymentsreceived.module';
import { BalancesPageModule } from '../pages/balances/balances.module';
import { SerlessettingPageModule } from '../pages/serlessetting/serlessetting.module';
import { PlanviewPageModule } from '../pages/planview/planview.module';
import { CouponviewPageModule } from '../pages/couponview/couponview.module';


@NgModule({
  declarations: [
    MyApp,
    LoginPage, 
    SignupPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    DirectivesModule,
    ComponentsModule,
    HomePageModule,
    TabsPageModule,
    ThreadsPageModule,
    ThreadCommentsPageModule,
    ThreadCreatePageModule,
    BookingRoomPageModule,
    ProfileFivePageModule,
    QRCodeModule,
    ListPageModule,
    PlansPageModule,
    PlanviewPageModule,
    CouponviewPageModule,
    BalancesPageModule,
    SerlessettingPageModule,
    CouponIssuePageModule,
    PaymentIssuePageModule,
    ServerlessSendPageModule,
    ServerlessReceivePageModule,
    CouponsPageModule,
    PaymentsmadePageModule,
    PaymentsreceivedPageModule,
    CouponRedeemPageModule,
    PaymentAcceptPageModule,
    CouponAdminPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage, 
    SignupPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Todos, 
    Planmanager, 
    Coupon, 
    Serverless, 
    Bitcoin, 
    Payment, 
    ServerlessPayment, 
    ServerlessTransaction, 
    ServerlessWallet, 
    Popservice, 
    SocialSharing,
    Auth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
