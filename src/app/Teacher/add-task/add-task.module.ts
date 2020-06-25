import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addTaskPage } from './add-task.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { addTaskPageRoutingModule } from './add-task-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    addTaskPageRoutingModule
  ],
  declarations: [addTaskPage]
})
export class addTaskPageModule {}
