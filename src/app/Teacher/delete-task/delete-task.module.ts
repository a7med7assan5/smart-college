import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { deleteTaskPage } from './delete-task.page';

import { deleteTaskPageRoutingModule } from './delete-task-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    deleteTaskPageRoutingModule
  ],
  declarations: [deleteTaskPage]
})
export class deleteTaskPageModule {}
