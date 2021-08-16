import { TxnFormEffects } from './effects/txn-form.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxnRoutingModule } from './txn-routing.module';
import { TxnListPageComponent } from './containers/txn-list-page/txn-list-page.component';
import { TxnListTableComponent } from './components/txn-list-table/txn-list-table.component';
import { StoreModule } from '@ngrx/store';
import * as fromTxn from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TxnCreateComponent } from './components/txn-basic-info/txn-basic-info.component';
import { TxnCreatePageComponent } from './containers/txn-create-page/txn-create-page';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionEffects } from './effects/transaction.effects';

import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { GlobalFilterComponent } from './components/global-filter/global-filter.component';
import { FrequencySettingTableComponent } from './components/frequency-setting-table/frequency-setting-table.component';
import { TxnSettingComponent } from './containers/txn-setting/txn-setting.component';
import { NgrxFormsModule, NGRX_STATUS_CLASS_NAMES } from 'ngrx-forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TabViewModule } from 'primeng/tabview';
import { TxnCreateJobComponent } from './components/txn-create-job/txn-create-job.component';
import { SharedModule } from 'src/app/shared';
import { ChooseModuleComponent } from './components/choose-module/choose-module.component';
import { ChooseMailgrpComponent } from './components/choose-mailgrp/choose-mailgrp.component';
import { JobSettingComponent } from './containers/job-setting/job-setting.component';
import { JobBasicInfoComponent } from './components/job-basic-info/job-basic-info.component';
import { SingleJobFieldComponent } from './components/single-job-field/single-job-field.component';

@NgModule({
  declarations: [
    TxnListPageComponent,
    TxnCreatePageComponent,
    TxnListTableComponent,
    TxnCreateComponent,
    GlobalFilterComponent,
    FrequencySettingTableComponent,
    TxnSettingComponent,
    TxnCreateJobComponent,
    ChooseModuleComponent,
    ChooseMailgrpComponent,
    JobSettingComponent,
    JobBasicInfoComponent,
    SingleJobFieldComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TxnRoutingModule,
    StoreModule.forFeature(fromTxn.FeatureKey, fromTxn.reducers),
    EffectsModule.forFeature([TransactionEffects, TxnFormEffects]),
    TableModule,
    SelectButtonModule,
    CalendarModule,
    AutoCompleteModule,
    NgrxFormsModule,
    InputSwitchModule,
    TabViewModule,
    SharedModule,
  ],
  // providers: [FakeDataService, TxnFormService],
})
export class TransactionModule {}
