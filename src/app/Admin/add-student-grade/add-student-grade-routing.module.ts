import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addStudentGradePage } from './add-student-grade.page';

const routes: Routes = [
  {
    path: '',
    component: addStudentGradePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addStudentGradePageRoutingModule {}
