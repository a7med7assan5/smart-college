import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { coursesRegisterationPage } from './courses-registeration.page';

const routes: Routes = [
  {
    path: '',
    component: coursesRegisterationPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class coursesRegisterationPageRoutingModule {}
