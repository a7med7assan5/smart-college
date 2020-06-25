import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { notificationsPageRoutingModule } from './notifications-routing.module';

import { notificationsPage } from './notifications.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    notificationsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [notificationsPage]
})
export class notificationsPageModule {}
