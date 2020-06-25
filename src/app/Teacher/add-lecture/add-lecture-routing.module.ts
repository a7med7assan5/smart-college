import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addLecturePage } from './add-lecture.page';

const routes: Routes = [
  {
    path: '',
    component: addLecturePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addLecturePageRoutingModule {}
