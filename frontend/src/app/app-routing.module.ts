import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/containers/layout/layout.component';
import { AuthGuard } from './features/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'transaction',
        loadChildren: () =>
          import('./features/transaction/txn.module').then(
            (m) => m.TransactionModule
          ),
      },
      {
        path: 'schedule',
        loadChildren: () =>
          import('./features/schedule/schedule.module').then(
            (m) => m.ScheduleModule
          ),
      },
      {
        path: 'parameter',
        loadChildren: () =>
          import('./features/parameter/parameter.module').then(
            (m) => m.ParameterModule
          ),
      },
      { path: '', redirectTo: 'transaction', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
