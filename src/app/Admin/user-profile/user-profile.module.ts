import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { userProfilePage } from './user-profile.page';

import { userProfilePageRoutingModule } from './user-profile-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    userProfilePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [userProfilePage]
})
export class userProfilePageModule {}
