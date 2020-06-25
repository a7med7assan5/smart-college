import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { usersPage } from './users.page';

import { usersPageRoutingModule } from './users-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    usersPageRoutingModule,
    TranslateModule.forChild(),
    NgxDatatableModule
  ],
  declarations: [usersPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class usersPageModule {}
