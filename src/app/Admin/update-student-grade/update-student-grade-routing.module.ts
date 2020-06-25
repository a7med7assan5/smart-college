import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { updateStudentGradePage } from './update-student-grade.page';

const routes: Routes = [
  {
    path: '',
    component: updateStudentGradePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class updateStudentGradePageRoutingModule {}
