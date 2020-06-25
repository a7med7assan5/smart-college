import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addAssignmentPage } from './add-assignment.page';

const routes: Routes = [
  {
    path: '',
    component: addAssignmentPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addAssignmentPageRoutingModule {}
