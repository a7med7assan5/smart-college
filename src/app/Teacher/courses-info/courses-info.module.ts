import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { coursesInfoPage } from './courses-info.page';

import { coursesInfoPageRoutingModule } from './courses-info-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    coursesInfoPageRoutingModule
  ],
  declarations: [coursesInfoPage]
})
export class coursesInfoPageModule {}
