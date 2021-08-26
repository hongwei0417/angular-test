import { TxnFormResolver } from './services/txn-form.resolver';
import { TxnCreatePageComponent } from './containers/txn-form-page/txn-form-page';
import { TxnListPageComponent } from './containers/txn-list-page/txn-list-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'list', component: TxnListPageComponent },
  {
    path: 'create',
    component: TxnCreatePageComponent,
    resolve: {
      state: TxnFormResolver,
    },
  },
  {
    path: 'view/:id',
    component: TxnCreatePageComponent,
    resolve: {
      state: TxnFormResolver,
    },
  },
  {
    path: 'edit/:id',
    component: TxnCreatePageComponent,
    resolve: {
      state: TxnFormResolver,
    },
  },
  {
    path: 'copy/:id',
    component: TxnCreatePageComponent,
    resolve: {
      state: TxnFormResolver,
    },
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TxnRoutingModule {}
