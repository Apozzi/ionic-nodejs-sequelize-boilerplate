import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaEditPageRoutingModule } from './area-edit-routing.module';

import { AreaEditPage } from './area-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaEditPageRoutingModule
  ],
  declarations: [AreaEditPage]
})
export class AreaEditPageModule {}
