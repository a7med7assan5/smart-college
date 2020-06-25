import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addStudentGradeTPage } from './add-student-grade-t.page';

const routes: Routes = [
  {
    path: '',
    component: addStudentGradeTPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addStudentGradeTPageRoutingModule {}
