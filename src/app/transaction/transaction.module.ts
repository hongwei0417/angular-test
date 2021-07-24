import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionListComponent } from './containers/transaction-list/transaction-list.component';
import { TxnListTableComponent } from './components/txn-list-table/txn-list-table.component';
import { StoreModule } from '@ngrx/store';
import * as from from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TransactionsEffects } from './effects/transactions.effects';


@NgModule({
  declarations: [
    TransactionListComponent,
    TxnListTableComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    StoreModule.forFeature(from.FeatureKey, from.reducers, { metaReducers: from.metaReducers }),
    EffectsModule.forFeature([TransactionsEffects])
  ]
})
export class TransactionModule { }
