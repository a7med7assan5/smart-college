import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addTaskPage } from './add-task.page';

const routes: Routes = [
  {
    path: '',
    component: addTaskPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addTaskPageRoutingModule {}
