import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/containers/layout/layout.component';
import { AuthGuard } from './features/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'txn',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'feature1', pathMatch: 'full' },
      {
        path: 'feature1',
        loadChildren: () =>
          import('./features/transaction/txn.module').then(
            (m) => m.TransactionModule
          ),
      },
      {
        path: 'feature2',
        loadChildren: () =>
          import('./features/schedule/schedule.module').then(
            (m) => m.ScheduleModule
          ),
      },
    ],
  },
  { path: '', redirectTo: '/txn', pathMatch: 'full' },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
