import { TxnCreatePageComponent } from './containers/txn-create-page/txn-create-page';
import { TxnListPageComponent } from './containers/txn-list-page/txn-list-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TxnListPageComponent },
  { path: 'create', component: TxnCreatePageComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TxnRoutingModule {}
