import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addCoursePage } from './add-course.page';

const routes: Routes = [
  {
    path: '',
    component: addCoursePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addCoursePageRoutingModule {}
