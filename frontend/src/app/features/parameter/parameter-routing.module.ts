import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailgrpListPageComponent } from './containers/mailgrp-list-page/mailgrp-list-page.component';
import { MailgrpCreatePageComponent } from './containers/mailgrp-create-page/mailgrp-create-page.component';
import { DllListPageComponent } from './containers/dll-list-page/dll-list-page.component';
import { DllCreatePageComponent } from './containers/dll-create-page/dll-create-page.component';

const routes: Routes = [
  { path: 'mailgroup/list', component: MailgrpListPageComponent },
  { path: 'mailgroup/create', component: MailgrpCreatePageComponent},
  { path: 'dll/list', component: DllListPageComponent },
  { path: 'dll/create', component: DllCreatePageComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParameterRoutingModule { }
