import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { teacherAttendancePage } from './attendance-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: teacherAttendancePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class teacherAttendancePageRoutingModule {}
