import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { gradesReportPage } from './grades-report.page';

const routes: Routes = [
  {
    path: '',
    component: gradesReportPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class gradesReportPageRoutingModule {}
