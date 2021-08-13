import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleListPageComponent } from './containers/schedule-list-page/schedule-list-page.component';
import { ExecuteLogPageComponent } from './containers/execute-log-page/execute-log-page.component';
import { AlarmStatePageComponent } from './containers/alarm-state-page/alarm-state-page.component';
import { ScheduleListTableComponent } from './components/schedule-list-table/schedule-list-table.component';
import { SharedModule } from 'src/app/shared';
import { ExecuteLogTableComponent } from './components/execute-log-table/execute-log-table.component';
import { AlarmStateTableComponent } from './components/alarm-state-table/alarm-state-table.component';

@NgModule({
  declarations: [ScheduleListPageComponent, ExecuteLogPageComponent, AlarmStatePageComponent, ScheduleListTableComponent, ExecuteLogTableComponent, AlarmStateTableComponent,  ],
  imports: [CommonModule, ScheduleRoutingModule, SharedModule],
})
export class ScheduleModule {}
