import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminCoursesPage } from './courses.page';

const routes: Routes = [
  {
    path: '',
    component: adminCoursesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class coursesPageRoutingModule {}
