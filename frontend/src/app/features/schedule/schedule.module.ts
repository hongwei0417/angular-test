import { NgrxFormsModule } from 'ngrx-forms';
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
import { GlobalFilterComponent } from './components/common-search/common-search.component';
import { StoreModule } from '@ngrx/store';
import * as fromSchedule from './reducers';
import { ExecuteLogSearchComponent } from './components/execute-log-search/execute-log-search.component';

@NgModule({
  declarations: [
    ScheduleListPageComponent,
    ExecuteLogPageComponent,
    AlarmStatePageComponent,
    ScheduleListTableComponent,
    ExecuteLogTableComponent,
    AlarmStateTableComponent,
    GlobalFilterComponent,
    ExecuteLogSearchComponent,
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    SharedModule,
    NgrxFormsModule,
    StoreModule.forFeature(fromSchedule.FeatureKey, fromSchedule.reducers),
  ],
})
export class ScheduleModule {}
