import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositoEditPage } from './deposito-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DepositoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositoEditPageRoutingModule {}