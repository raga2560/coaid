import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ComponentsModule } from '../components/components.module';


import { DirectivesModule } from '../directives/directives.module';
import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { ThreadsPageModule } from '../pages/threads/threads.module';
import { ThreadCommentsPageModule } from '../pages/thread-comments/thread-comments.module';
import { ThreadCreatePageModule } from '../pages/thread-create/thread-create.module';
import { CommentCreatePageModule } from '../pages/comment-create/comment-create.module';
import { IonicStorageModule } from '@ionic/storage';
import { LoginPage } from '../pages/login-page/login-page';
import { SignupPage } from '../pages/signup-page/signup-page';
import { Auth } from '../providers/auth';
import { Popservice } from '../providers/popservice';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProfileFivePageModule } from '../pages/profile-five/profile-five.module';
import { BookingRoomPageModule } from '../pages/booking-room/booking-room.module';
import { HelpPageModule } from '../pages/help/help.module';
import { TicketPageModule } from '../pages/ticket/ticket.module';
import { LogoutPageModule } from '../pages/logout/logout.module';
import { CompanyPageModule } from '../pages/company/company.module';
import { EmployeePageModule } from '../pages/employee/employee.module';
import { FinancialPageModule } from '../pages/financial/financial.module';
import { BillsPageModule } from '../pages/bills/bills.module';
import { PaymentsPageModule } from '../pages/payments/payments.module';
import { VisitorListPageModule } from '../pages/visitor-list/visitor-list.module';
import { VisitorExpectedPageModule } from '../pages/visitor-expected/visitor-expected.module';


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
    CommentCreatePageModule,
    ThreadCreatePageModule,
    BookingRoomPageModule,
    ProfileFivePageModule,
    HelpPageModule,
    TicketPageModule,
    CompanyPageModule,
    EmployeePageModule,
    FinancialPageModule,
    BillsPageModule,
    PaymentsPageModule,
    VisitorListPageModule,
    VisitorExpectedPageModule,
    LogoutPageModule,
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
    SocialSharing,
    Auth,
    Popservice,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
