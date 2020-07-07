import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositoPageRoutingModule } from './deposito-routing.module';

import { DepositoPage } from './deposito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositoPageRoutingModule
  ],
  declarations: [DepositoPage]
})
export class DepositoPageModule {}
