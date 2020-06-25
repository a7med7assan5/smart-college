import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { teacherAttendanceSheetStudentPage } from './attendance-sheet-student.page';

import { teacherAttendanceSheetStudentPageRoutingModule } from './attendance-sheet-student-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    teacherAttendanceSheetStudentPageRoutingModule
  ],
  declarations: [teacherAttendanceSheetStudentPage]
})
export class teacherAttendanceSheetStudentPageModule {}
