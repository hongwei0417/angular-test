import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotTableModule } from '@handsontable/angular';
import { HandsontableComponent } from './handsontable/handsontable.component';
import { PrimengModule } from './primeng';
import { VarDirective } from './directives/ng-var.directive';
import { QuartzCronModule } from '@sbzen/ng-cron';
import { CronGenerateDialogComponent } from './ng-cron/cron-generate-dialog/cron-generate-dialog.component';

@NgModule({
  declarations: [
    HandsontableComponent,
    VarDirective,
    CronGenerateDialogComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    HotTableModule,
    QuartzCronModule,
  ],
  exports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    HotTableModule,
    HandsontableComponent,
    QuartzCronModule,
    CronGenerateDialogComponent,
  ],
})
export class SharedModule {}
