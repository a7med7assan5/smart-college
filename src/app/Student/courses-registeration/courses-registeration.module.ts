import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { coursesRegisterationPage } from './courses-registeration.page';

import { coursesRegisterationPageRoutingModule } from './courses-registeration-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    coursesRegisterationPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [coursesRegisterationPage]
})
export class coursesRegisterationPageModule {}
