import { LayoutComponent } from './core/components/layout/layout.component';
import { TxnListTableComponent } from './transaction/components/txn-list-table/txn-list-table.component';
import { TxnCreateComponent } from './transaction/components/txn-create/txn-create.component';
import { AppComponent } from './core/containers/app/app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'txn', pathMatch: 'full' },
  {
    path: 'txn',
    component: LayoutComponent,
    children: [
      {
        path: 'first',
        loadChildren: () =>
          import('./transaction/transaction.module').then(
            (m) => m.TransactionModule
          ),
      },
      {
        path: 'second',
        component: TxnCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
