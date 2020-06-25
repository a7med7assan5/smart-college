import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { attendMePage } from './attend-me.page';

import { attendMePageRoutingModule } from './attend-me-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    attendMePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [attendMePage]
})
export class attendMePageModule {}
