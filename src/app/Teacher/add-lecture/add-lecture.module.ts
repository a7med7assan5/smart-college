import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addLecturePage } from './add-lecture.page';

import { addLecturePageRoutingModule } from './add-lecture-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    addLecturePageRoutingModule
  ],
  declarations: [addLecturePage]
})
export class addLecturePageModule {}
