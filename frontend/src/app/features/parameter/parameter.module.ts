import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared';
import { ParameterRoutingModule } from './parameter-routing.module';
import { MailgrpListPageComponent } from './containers/mailgrp-list-page/mailgrp-list-page.component';
import { MailgrpListTableComponent } from './components/mailgrp-list-table/mailgrp-list-table.component';
import { DllListPageComponent } from './containers/dll-list-page/dll-list-page.component';
import { DllCreatePageComponent } from './containers/dll-create-page/dll-create-page.component';
import { DllListTableComponent } from './components/dll-list-table/dll-list-table.component';
import { DllCreateFormComponent } from './components/dll-create-form/dll-create-form.component';
import { MailgrpCreateFormComponent } from './components/mailgrp-create-form/mailgrp-create-form.component';
import { MailgrpCreatePageComponent } from './containers/mailgrp-create-page/mailgrp-create-page.component';



@NgModule({
  declarations: [
    MailgrpListPageComponent,
    MailgrpListTableComponent,
    DllListPageComponent,
    DllCreatePageComponent,
    DllListTableComponent,
    DllCreateFormComponent,
    MailgrpCreateFormComponent,
    MailgrpCreatePageComponent
  ],
  imports: [
    CommonModule,
    ParameterRoutingModule,
    SharedModule
  ]
})
export class ParameterModule { }
