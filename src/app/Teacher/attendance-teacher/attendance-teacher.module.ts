import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { teacherAttendancePage } from './attendance-teacher.page';

import { teacherAttendancePageRoutingModule } from './attendance-teacher-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    teacherAttendancePageRoutingModule
  ],
  declarations: [teacherAttendancePage]
})
export class teacherAttendancePageModule {}
