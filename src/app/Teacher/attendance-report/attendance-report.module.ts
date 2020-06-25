import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { attendanceReportPage } from './attendance-report.page';

import { attendanceReportPageRoutingModule } from './attendance-report-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    attendanceReportPageRoutingModule
  ],
  declarations: [attendanceReportPage]
})
export class attendanceReportPageModule {}
