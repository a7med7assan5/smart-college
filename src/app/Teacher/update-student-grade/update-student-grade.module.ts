import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { teacherUpdateStudentGradePage } from './update-student-grade.page';

import { teacherUpdateStudentGradePageRoutingModule } from './update-student-grade-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    teacherUpdateStudentGradePageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [teacherUpdateStudentGradePage]
})
export class teacherUpdateStudentGradePageModule {}
