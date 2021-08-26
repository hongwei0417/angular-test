import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared';
import { ParameterRoutingModule } from './parameter-routing.module';
import { MailgrpListPageComponent } from './containers/mailgrp-list-page/mailgrp-list-page.component';
import { MailgrpListTableComponent } from './components/mailgrp-list-table/mailgrp-list-table.component';
import { DllListPageComponent } from './containers/dll-list-page/dll-list-page.component';
import { DllCreatePageComponent } from './containers/dll-form-page/dll-form-page.component';
import { DllListTableComponent } from './components/dll-list-table/dll-list-table.component';
import { DllCreateFormComponent } from './components/dll-form/dll-form.component';
import { MailgrpCreateFormComponent } from './components/mailgrp-create-form/mailgrp-create-form.component';
import { MailgrpCreatePageComponent } from './containers/mailgrp-create-page/mailgrp-create-page.component';
import { CommonSearchComponent } from './components/common-search/common-search.component';
import * as fromParameter from './reducers';
import { NgrxFormsModule } from 'ngrx-forms';

@NgModule({
  declarations: [
    MailgrpListPageComponent,
    MailgrpListTableComponent,
    DllListPageComponent,
    DllCreatePageComponent,
    DllListTableComponent,
    DllCreateFormComponent,
    MailgrpCreateFormComponent,
    MailgrpCreatePageComponent,
    CommonSearchComponent,
  ],
  imports: [
    CommonModule,
    ParameterRoutingModule,
    SharedModule,
    NgrxFormsModule,
    StoreModule.forFeature(fromParameter.FeatureKey, fromParameter.reducers),
  ],
})
export class ParameterModule {}
