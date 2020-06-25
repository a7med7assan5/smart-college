import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { studentCoursesPage } from './courses.page';

const routes: Routes = [
  {
    path: '',
    component: studentCoursesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class coursesPageRoutingModule {}
