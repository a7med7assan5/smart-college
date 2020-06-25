import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { teacherAddCourseGradePage } from './add-course-grade.page';

const routes: Routes = [
  {
    path: '',
    component: teacherAddCourseGradePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class teacherAddCourseGradePageRoutingModule {}
