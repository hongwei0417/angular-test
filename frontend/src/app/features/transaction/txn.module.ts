import { TxnFormService } from './services/txn-form.service';
import { FakeDataService } from '../../core/services/fake-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxnRoutingModule } from './txn-routing.module';
import { TxnListPageComponent } from './containers/txn-list-page/txn-list-page.component';
import { TxnListTableComponent } from './components/txn-list-table/txn-list-table.component';
import { StoreModule } from '@ngrx/store';
import * as fromTxn from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TxnCreateComponent } from './components/txn-create/txn-create.component';
import { TxnCreatePageComponent } from './containers/txn-create-page/txn-create-page';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionEffects } from './effects/transaction.effects';


import { TableModule} from 'primeng/table';
import { SelectButtonModule} from 'primeng/selectbutton';
import { CalendarModule} from 'primeng/calendar';
import { AutoCompleteModule} from 'primeng/autocomplete';
import { InputSwitchModule} from 'primeng/inputswitch';
import { TabViewModule} from 'primeng/tabview';
import { TxnCreateJobComponent } from './components/txn-create-job/txn-create-job.component';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [
    TxnListPageComponent,
    TxnCreatePageComponent,
    TxnListTableComponent,
    TxnCreateComponent,
    TxnCreateJobComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TxnRoutingModule,
    StoreModule.forFeature(fromTxn.FeatureKey, fromTxn.reducers),
    EffectsModule.forFeature([TransactionEffects]),
    TableModule,
    SelectButtonModule,
    CalendarModule,
    AutoCompleteModule,
    InputSwitchModule,
    TabViewModule,
    SharedModule
  ],
  // providers: [FakeDataService, TxnFormService],
})
export class TransactionModule {}
