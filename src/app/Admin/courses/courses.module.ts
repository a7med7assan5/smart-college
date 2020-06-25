import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { adminCoursesPage } from './courses.page';

import { coursesPageRoutingModule } from './courses-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    coursesPageRoutingModule,
    TranslateModule.forChild(),
    NgxDatatableModule
  ],
  declarations: [adminCoursesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class coursesPageModule {}
