import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from './primeng';
import { HotTableModule } from '@handsontable/angular';
import { HandsontableComponent } from './handsontable/handsontable.component';


@NgModule({
  declarations: [
    HandsontableComponent
  ],
  imports: [CommonModule, PrimengModule, FormsModule, ReactiveFormsModule, HotTableModule],
  exports: [CommonModule, PrimengModule, FormsModule, ReactiveFormsModule, HotTableModule, HandsontableComponent],
})
export class SharedModule {}
