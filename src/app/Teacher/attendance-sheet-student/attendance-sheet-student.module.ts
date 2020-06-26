import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { teacherAttendanceSheetStudentPage } from './attendance-sheet-student.page';

import { teacherAttendanceSheetStudentPageRoutingModule } from './attendance-sheet-student-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    teacherAttendanceSheetStudentPageRoutingModule,
    TranslateModule.forChild(),
    NgxDatatableModule
  ],
  declarations: [teacherAttendanceSheetStudentPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class teacherAttendanceSheetStudentPageModule {}
