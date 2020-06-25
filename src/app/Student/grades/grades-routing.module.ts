import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { gradesPage } from './grades.page';

const routes: Routes = [
  {
    path: '',
    component: gradesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class gradesPageRoutingModule {}
