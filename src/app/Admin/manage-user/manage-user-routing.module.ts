import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { manageUserPage } from './manage-user.page';

const routes: Routes = [
  {
    path: '',
    component: manageUserPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class manageUserPageRoutingModule {}
