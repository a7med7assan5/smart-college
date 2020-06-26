import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { coursesInfoPage } from './courses-info.page';

import { coursesInfoPageRoutingModule } from './courses-info-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    coursesInfoPageRoutingModule,
    TranslateModule.forChild(),
    NgxDatatableModule
  ],
  declarations: [coursesInfoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class coursesInfoPageModule {}
