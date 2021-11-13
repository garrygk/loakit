import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartContractPageRoutingModule } from './smart-contract-routing.module';

import { SmartContractPage } from './smart-contract.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartContractPageRoutingModule
  ],
  declarations: [SmartContractPage]
})
export class SmartContractPageModule {}
