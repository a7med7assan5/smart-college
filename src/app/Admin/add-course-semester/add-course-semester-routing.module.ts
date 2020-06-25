import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addCourseSemesterPage } from './add-course-semester.page';

const routes: Routes = [
  {
    path: '',
    component: addCourseSemesterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addCourseSemesterPageRoutingModule {}
