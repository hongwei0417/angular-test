import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from './primeng';
import { VarDirective } from './directives/ng-var.directive';

@NgModule({
  imports: [CommonModule, PrimengModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, PrimengModule, FormsModule, ReactiveFormsModule],
  declarations: [VarDirective],
})
export class SharedModule {}
