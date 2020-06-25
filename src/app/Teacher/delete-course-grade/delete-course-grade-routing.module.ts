import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { teacherDeleteCourseGradePage } from './delete-course-grade.page';

const routes: Routes = [
  {
    path: '',
    component: teacherDeleteCourseGradePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class teacherDeleteCourseGradePageRoutingModule {}
