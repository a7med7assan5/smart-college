import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { studentCoursesPage } from './courses.page';

import { coursesPageRoutingModule } from './courses-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    coursesPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [studentCoursesPage]
})
export class coursesPageModule {}
