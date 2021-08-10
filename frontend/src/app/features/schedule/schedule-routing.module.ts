import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmStatePageComponent } from './containers/alarm-state-page/alarm-state-page.component';
import { ExecuteLogPageComponent } from './containers/execute-log-page/execute-log-page.component';
import { ScheduleListPageComponent } from './containers/schedule-list-page/schedule-list-page.component';

const routes: Routes = [
  { path: 'list', component: ScheduleListPageComponent },
  { path: 'execute-log', component: ExecuteLogPageComponent },
  { path: 'alarm-state', component: AlarmStatePageComponent },
  { path: '', component: ScheduleListPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRoutingModule {}


