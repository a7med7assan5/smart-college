import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { courseInfoPage } from './course-info.page';

import { courseInfoPageRoutingModule } from './course-info-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    courseInfoPageRoutingModule,
    TranslateModule.forChild(),
    NgxDatatableModule
  ],
  declarations: [courseInfoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class courseInfoPageModule {}
