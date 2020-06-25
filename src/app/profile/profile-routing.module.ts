import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { profilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: profilePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class profilePageRoutingModule {}
