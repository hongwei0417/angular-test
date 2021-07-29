import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleListPageComponent } from './containers/schedule-list-page/schedule-list-page.component';

@NgModule({
  declarations: [ScheduleListPageComponent],
  imports: [CommonModule, ScheduleRoutingModule],
})
export class ScheduleModule {}
