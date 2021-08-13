import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotTableModule } from '@handsontable/angular';
import { HandsontableComponent } from './handsontable/handsontable.component';
import { PrimengModule } from './primeng';
import { VarDirective } from './directives/ng-var.directive';

@NgModule({
  declarations: [HandsontableComponent, VarDirective],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    HotTableModule,
  ],
  exports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    HotTableModule,
    HandsontableComponent,
  ],
})
export class SharedModule {}
