import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingRoomPage } from './booking-room';

@NgModule({
  declarations: [
    BookingRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingRoomPage),
  ],
})
export class BookingRoomPageModule {}
