import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UseraddressPage } from './useraddress.page';

const routes: Routes = [
  {
    path: '',
    component: UseraddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UseraddressPageRoutingModule {}
