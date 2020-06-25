import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { coursesSinglePage } from './courses-single.page';

import { coursesSinglePageRoutingModule } from './courses-single-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    coursesSinglePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [coursesSinglePage]
})
export class coursesSinglePageModule {}
