import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UseraddressPageRoutingModule } from './useraddress-routing.module';

import { UseraddressPage } from './useraddress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UseraddressPageRoutingModule
  ],
  declarations: [UseraddressPage]
})
export class UseraddressPageModule {}
