import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThreadCreatePage } from './thread-create';

@NgModule({
  declarations: [
    ThreadCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ThreadCreatePage),
  ],
})
export class ThreadCreatePageModule {}
