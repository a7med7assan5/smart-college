import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { deleteUserCoursePage } from './delete-user-course.page';

const routes: Routes = [
  {
    path: '',
    component: deleteUserCoursePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class deleteUserCoursePageRoutingModule {}
