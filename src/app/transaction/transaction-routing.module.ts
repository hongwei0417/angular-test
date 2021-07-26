import { TransactionCreateComponent } from './containers/transaction-create/transaction-create.component';
import { TransactionListComponent } from './containers/transaction-list/transaction-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TransactionListComponent },
  { path: 'create', component: TransactionCreateComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
