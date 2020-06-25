import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { attendanceRecord } from './attendance-record.page';

import { attendanceRecordRoutingModule } from './attendance-record-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    attendanceRecordRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [attendanceRecord]
})
export class attendanceRecordPageModule {}
