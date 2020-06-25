import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { deleteCourseGradePage } from './delete-course-grade.page';

import { deleteCourseGradePageRoutingModule } from './delete-course-grade-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    deleteCourseGradePageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [deleteCourseGradePage]
})
export class deleteCourseGradePageModule {}
