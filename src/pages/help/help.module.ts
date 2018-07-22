import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';

import { HelpPage } from './help';

@NgModule({
  declarations: [
    HelpPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpPage),
     ComponentsModule
  ],
  exports: [
     ComponentsModule
  ]
})
export class HelpPageModule {}
