import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addAssignmentPage } from './add-assignment.page';

import { addAssignmentPageRoutingModule } from './add-assignment-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    addAssignmentPageRoutingModule
  ],
  declarations: [addAssignmentPage]
})
export class addAssignmentPageModule {}
