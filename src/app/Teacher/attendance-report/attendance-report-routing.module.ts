import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { attendanceReportPage } from './attendance-report.page';

const routes: Routes = [
  {
    path: '',
    component: attendanceReportPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class attendanceReportPageRoutingModule {}
