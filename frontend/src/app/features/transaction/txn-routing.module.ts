import { TxnCreatePageComponent } from './containers/txn-form-page/txn-form-page';
import { TxnListPageComponent } from './containers/txn-list-page/txn-list-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'list', component: TxnListPageComponent },
  { path: 'create', component: TxnCreatePageComponent },
  { path: 'view', component: TxnCreatePageComponent },
  { path: 'edit', component: TxnCreatePageComponent },
  { path: 'copy', component: TxnCreatePageComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TxnRoutingModule {}
