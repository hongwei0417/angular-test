import { TxnCreateEffects } from './effects/txn-create.effects';
import { FormService } from './services/form.service';
import { FakeDataService } from './../core/services/fake-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionListComponent } from './containers/transaction-list/transaction-list.component';
import { TxnListTableComponent } from './components/txn-list-table/txn-list-table.component';
import { StoreModule } from '@ngrx/store';
import * as from from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TxnCreateComponent } from './components/txn-create/txn-create.component';
import { TransactionCreateComponent } from './containers/transaction-create/transaction-create.component';
import { TxnListEffects } from './effects/txn-list.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransactionListComponent,
    TxnListTableComponent,
    TxnCreateComponent,
    TransactionCreateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TransactionRoutingModule,
    StoreModule.forFeature(from.FeatureKey, from.reducers, {
      metaReducers: [],
    }),
    EffectsModule.forFeature([TxnListEffects, TxnCreateEffects]),
  ],
  providers: [FakeDataService, FormService],
})
export class TransactionModule {}
