import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { coursesSinglePage } from './courses-single.page';

const routes: Routes = [
  {
    path: '',
    component: coursesSinglePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class coursesSinglePageRoutingModule {}
