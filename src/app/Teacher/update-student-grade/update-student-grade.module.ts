import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { teacherUpdateStudentGradePage } from './update-student-grade.page';

import { teacherUpdateStudentGradePageRoutingModule } from './update-student-grade-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    teacherUpdateStudentGradePageRoutingModule
  ],
  declarations: [teacherUpdateStudentGradePage]
})
export class teacherUpdateStudentGradePageModule {}
