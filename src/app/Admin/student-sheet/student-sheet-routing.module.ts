import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { studentSheetPage } from './student-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: studentSheetPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class studentSheetPageRoutingModule {}
