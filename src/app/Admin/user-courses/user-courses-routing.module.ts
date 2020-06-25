import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userCoursesPage } from './user-courses.page';

const routes: Routes = [
  {
    path: '',
    component: userCoursesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userCoursesPageRoutingModule {}
