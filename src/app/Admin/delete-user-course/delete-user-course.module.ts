import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { deleteUserCoursePage } from './delete-user-course.page';

import { deleteUserCoursePageRoutingModule } from './delete-user-course-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    deleteUserCoursePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [deleteUserCoursePage]
})
export class deleteUserCoursePageModule {}
