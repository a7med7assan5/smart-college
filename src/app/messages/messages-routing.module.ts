import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { messagesPage } from './messages.page';

const routes: Routes = [
  {
    path: '',
    component: messagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class messagesPageRoutingModule {}
