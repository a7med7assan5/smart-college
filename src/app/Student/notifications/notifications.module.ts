import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { notificationsPage } from './notifications.page';

import { notificationsPageRoutingModule } from './notifications-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    notificationsPageRoutingModule
  ],
  declarations: [notificationsPage]
})
export class notificationsPageModule {}
