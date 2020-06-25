import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addCourseGradePage } from './add-course-grade.page';

const routes: Routes = [
  {
    path: '',
    component: addCourseGradePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addCourseGradePageRoutingModule {}
