import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { attendanceRecord } from './attendance-record.page';

const routes: Routes = [
  {
    path: '',
    component: attendanceRecord,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class attendanceRecordRoutingModule {}
