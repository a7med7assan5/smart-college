import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { teacherStudentSheetPage } from './student-sheet.page';

import { teacherStudentSheetPageRoutingModule } from './student-sheet-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    teacherStudentSheetPageRoutingModule,
    TranslateModule.forChild(),
    NgxDatatableModule
  ],
  declarations: [teacherStudentSheetPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class teacherStudentSheetPageModule {}
