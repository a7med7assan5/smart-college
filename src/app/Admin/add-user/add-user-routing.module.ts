import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addUserPage } from './add-user.page';

const routes: Routes = [
  {
    path: '',
    component: addUserPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addUserPageRoutingModule {}
