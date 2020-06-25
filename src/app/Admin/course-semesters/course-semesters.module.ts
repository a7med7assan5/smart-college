import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { courseSemestersPage } from './course-semesters.page';

import { courseSemestersPageRoutingModule } from './course-semesters-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    courseSemestersPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [courseSemestersPage]
})
export class courseSemestersPageModule {}
