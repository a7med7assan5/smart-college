import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { teacherDeleteCourseGradePage } from './delete-course-grade.page';

import { teacherDeleteCourseGradePageRoutingModule } from './delete-course-grade-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    teacherDeleteCourseGradePageRoutingModule
  ],
  declarations: [teacherDeleteCourseGradePage]
})
export class teacherDeleteCourseGradePageModule {}
