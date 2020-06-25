import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { courseSemestersPage } from './course-semesters.page';

const routes: Routes = [
  {
    path: '',
    component: courseSemestersPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class courseSemestersPageRoutingModule {}
