import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addCourseStudentGradePage } from './add-course-student-grade.page';

import { addCourseStudentGradePageRoutingModule } from './add-course-student-grade-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    addCourseStudentGradePageRoutingModule
  ],
  declarations: [addCourseStudentGradePage]
})
export class addCourseStudentGradePageModule {}
