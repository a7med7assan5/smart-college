import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { addCourseSemesterPage } from './add-course-semester.page';

import { addCourseSemesterPageRoutingModule } from './add-course-semester-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    addCourseSemesterPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [addCourseSemesterPage]
})
export class addCourseSemesterPageModule {}
