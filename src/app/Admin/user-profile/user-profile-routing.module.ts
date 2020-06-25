import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userProfilePage } from './user-profile.page';

const routes: Routes = [
  {
    path: '',
    component: userProfilePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userProfilePageRoutingModule {}
