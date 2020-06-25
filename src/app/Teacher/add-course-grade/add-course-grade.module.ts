import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { teacherAddCourseGradePage } from './add-course-grade.page';

import { teacherAddCourseGradePageRoutingModule } from './add-course-grade-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    teacherAddCourseGradePageRoutingModule
  ],
  declarations: [teacherAddCourseGradePage]
})
export class teacherAddCourseGradePageModule {}
