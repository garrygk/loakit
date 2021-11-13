import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaturalSciencePageRoutingModule } from './natural-science-routing.module';

import { NaturalSciencePage } from './natural-science.page';
import { TestModalComponent } from '../test-modal/test-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    NaturalSciencePageRoutingModule
  ],
  declarations: [NaturalSciencePage, TestModalComponent],
  entryComponents: [TestModalComponent]
})
export class NaturalSciencePageModule {}
