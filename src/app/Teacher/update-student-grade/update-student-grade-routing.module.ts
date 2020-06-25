import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { teacherUpdateStudentGradePage } from './update-student-grade.page';

const routes: Routes = [
  {
    path: '',
    component: teacherUpdateStudentGradePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class teacherUpdateStudentGradePageRoutingModule {}
