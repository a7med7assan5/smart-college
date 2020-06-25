import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { teacherAttendanceSheetStudentPage } from './attendance-sheet-student.page';

const routes: Routes = [
  {
    path: '',
    component: teacherAttendanceSheetStudentPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class teacherAttendanceSheetStudentPageRoutingModule {}
