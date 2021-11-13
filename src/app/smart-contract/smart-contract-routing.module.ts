import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartContractPage } from './smart-contract.page';

const routes: Routes = [
  {
    path: '',
    component: SmartContractPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartContractPageRoutingModule {}
