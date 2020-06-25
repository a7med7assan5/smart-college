import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gradesPage } from './grades.page';

import { gradesPageRoutingModule } from './grades-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    gradesPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [gradesPage]
})
export class gradesPageModule {}
