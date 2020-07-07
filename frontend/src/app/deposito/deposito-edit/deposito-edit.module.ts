import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositoEditPageRoutingModule } from './deposito-edit-routing.module';

import { DepositoEditPage } from './deposito-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositoEditPageRoutingModule
  ],
  declarations: [DepositoEditPage]
})
export class DepositoEditPageModule {}
