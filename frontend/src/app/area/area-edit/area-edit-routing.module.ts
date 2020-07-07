import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaEditPage } from './area-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AreaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaEditPageRoutingModule {}