import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { manageCoursePage } from './manage-course.page';

const routes: Routes = [
  {
    path: '',
    component: manageCoursePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class manageCoursePageRoutingModule {}
