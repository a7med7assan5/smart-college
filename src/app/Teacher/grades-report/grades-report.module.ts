import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gradesReportPage } from './grades-report.page';

import { gradesReportPageRoutingModule } from './grades-report-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    gradesReportPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [gradesReportPage]
})
export class gradesReportPageModule {}
