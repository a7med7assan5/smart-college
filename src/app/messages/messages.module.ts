import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { messagesPageRoutingModule } from './messages-routing.module';

import { messagesPage } from './messages.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    messagesPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [messagesPage]
})
export class messagesPageModule {}
