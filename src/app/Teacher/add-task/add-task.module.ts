import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { addTaskPage } from './add-task.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { addTaskPageRoutingModule } from './add-task-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    addTaskPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [addTaskPage]
})
export class addTaskPageModule {}
