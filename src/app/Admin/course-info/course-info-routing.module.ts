import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { courseInfoPage } from './course-info.page';

const routes: Routes = [
  {
    path: '',
    component: courseInfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class courseInfoPageRoutingModule {}
