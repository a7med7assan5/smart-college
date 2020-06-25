import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { teacherGradesPage } from './grades-teacher.page';

import { teacherGradesPageRoutingModule } from './grades-teacher-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    teacherGradesPageRoutingModule
  ],
  declarations: [teacherGradesPage]
})
export class teacherGradesPageModule {}
