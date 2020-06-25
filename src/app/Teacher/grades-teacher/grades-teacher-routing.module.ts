import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { teacherGradesPage } from './grades-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: teacherGradesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class teacherGradesPageRoutingModule {}
