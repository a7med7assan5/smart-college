import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { studentsGradePage } from './students-grade.page';

import { studentsGradePageRoutingModule } from './students-grade-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    studentsGradePageRoutingModule,
    TranslateModule.forChild(),
    NgxDatatableModule
  ],
  declarations: [studentsGradePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class studentsGradePageModule {}
