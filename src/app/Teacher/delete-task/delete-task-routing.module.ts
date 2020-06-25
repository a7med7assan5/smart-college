import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { deleteTaskPage } from './delete-task.page';

const routes: Routes = [
  {
    path: '',
    component: deleteTaskPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class deleteTaskPageRoutingModule {}
