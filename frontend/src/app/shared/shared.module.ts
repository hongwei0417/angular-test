import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from './primeng';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimengModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, PrimengModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
