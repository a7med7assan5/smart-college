import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { coursesInfoPage } from './courses-info.page';

const routes: Routes = [
  {
    path: '',
    component: coursesInfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class coursesInfoPageRoutingModule {}
