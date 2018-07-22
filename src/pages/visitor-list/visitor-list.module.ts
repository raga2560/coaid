import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitorListPage } from './visitor-list';

@NgModule({
  declarations: [
    VisitorListPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitorListPage),
  ],
})
export class VisitorListPageModule {}
