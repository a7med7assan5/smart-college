import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { teacherStudentSheetPage } from './student-sheet.page';

import { teacherStudentSheetPageRoutingModule } from './student-sheet-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    teacherStudentSheetPageRoutingModule
  ],
  declarations: [teacherStudentSheetPage]
})
export class teacherStudentSheetPageModule {}
