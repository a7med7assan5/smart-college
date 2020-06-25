import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { teacherStudentSheetPage } from './student-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: teacherStudentSheetPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class teacherStudentSheetPageRoutingModule {}
