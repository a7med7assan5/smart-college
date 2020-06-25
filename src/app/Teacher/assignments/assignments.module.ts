import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { assignmentsPage } from './assignments.page';

import { assignmentsPageRoutingModule } from './assignments-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    assignmentsPageRoutingModule
  ],
  declarations: [assignmentsPage]
})
export class assignmentsPageModule {}
