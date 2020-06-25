import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addStudentGradeTPage } from './add-student-grade-t.page';

import { addStudentGradeTPageRoutingModule } from './add-student-grade-t-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    addStudentGradeTPageRoutingModule
  ],
  declarations: [addStudentGradeTPage]
})
export class addStudentGradeTPageModule {}
