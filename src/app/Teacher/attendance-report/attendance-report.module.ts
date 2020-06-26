import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { attendanceReportPage } from './attendance-report.page';

import { attendanceReportPageRoutingModule } from './attendance-report-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    attendanceReportPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [attendanceReportPage]
})
export class attendanceReportPageModule {}
