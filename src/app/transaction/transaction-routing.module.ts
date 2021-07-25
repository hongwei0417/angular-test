import { TxnCreateComponent } from './components/txn-create/txn-create.component';
import { TxnListTableComponent } from './components/txn-list-table/txn-list-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TxnListTableComponent },
  { path: 'create', component: TxnCreateComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
