import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThreadsPage } from './threads';

@NgModule({
  declarations: [
    ThreadsPage,
  ],
  imports: [
    IonicPageModule.forChild(ThreadsPage),
  ],
})
export class ThreadsPageModule {}
