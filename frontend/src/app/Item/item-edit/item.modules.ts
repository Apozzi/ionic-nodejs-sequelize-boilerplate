import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemEditPageRoutingModule } from './item-edit-routing.module';

import { ItemEditPage } from './item-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemEditPageRoutingModule
  ],
  declarations: [ItemEditPage]
})
export class ItemEditPageModule {}
