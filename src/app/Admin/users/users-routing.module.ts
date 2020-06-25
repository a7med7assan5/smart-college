import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usersPage } from './users.page';

const routes: Routes = [
  {
    path: '',
    component: usersPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class usersPageRoutingModule {}
