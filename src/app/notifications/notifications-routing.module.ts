import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { notificationsPage } from './notifications.page';

const routes: Routes = [
  {
    path: '',
    component: notificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class notificationsPageRoutingModule {}
