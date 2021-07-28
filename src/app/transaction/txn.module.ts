import { TxnFormService } from './services/txn-form.service';
import { FakeDataService } from '../core/services/fake-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxnRoutingModule } from './txn-routing.module';
import { TxnListPageComponent } from './containers/txn-list-page/txn-list-page.component';
import { TxnListTableComponent } from './components/txn-list-table/txn-list-table.component';
import { StoreModule } from '@ngrx/store';
import { reducers, FeatureKey } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TxnCreateComponent } from './components/txn-create/txn-create.component';
import { TxnCreatePageComponent } from './containers/txn-create-page/txn-create-page';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionEffects } from './effects/transaction.effects';

@NgModule({
  declarations: [
    TxnListPageComponent,
    TxnCreatePageComponent,
    TxnListTableComponent,
    TxnCreateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TxnRoutingModule,
    StoreModule.forFeature(FeatureKey, reducers),
    EffectsModule.forFeature([TransactionEffects]),
  ],
  providers: [FakeDataService, TxnFormService],
})
export class TransactionModule {}
