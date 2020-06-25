import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userCourseInfoPage } from './user-course-info.page';

const routes: Routes = [
  {
    path: '',
    component: userCourseInfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userCourseInfoPageRoutingModule {}
