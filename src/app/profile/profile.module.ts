import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { profilePage } from './profile.page';

import { profilePageRoutingModule } from './profile-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    profilePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [profilePage]
})
export class profilePageModule {}
