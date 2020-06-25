import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gradesReportPage } from './grades-report.page';

import { gradesReportPageRoutingModule } from './grades-report-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    gradesReportPageRoutingModule
  ],
  declarations: [gradesReportPage]
})
export class gradesReportPageModule {}
