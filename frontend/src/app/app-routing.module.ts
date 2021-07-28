import { AuthGuard } from './auth/guards/auth.guard';
import { LayoutComponent } from './core/components/layout/layout.component';
import { TxnCreateComponent } from './transaction/components/txn-create/txn-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'txn', pathMatch: 'full' },
  {
    path: 'txn',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'feature1', pathMatch: 'full' },
      {
        path: 'feature1',
        loadChildren: () =>
          import('./transaction/txn.module').then((m) => m.TransactionModule),
      },
      {
        path: 'feature2',
        loadChildren: () =>
          import('./schedule/schedule.module').then((m) => m.ScheduleModule),
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
