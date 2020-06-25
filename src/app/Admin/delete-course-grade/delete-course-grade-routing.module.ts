import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { deleteCourseGradePage } from './delete-course-grade.page';

const routes: Routes = [
  {
    path: '',
    component: deleteCourseGradePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class deleteCourseGradePageRoutingModule {}
