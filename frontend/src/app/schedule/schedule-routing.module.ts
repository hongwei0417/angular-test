import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleListPageComponent } from './schedule-list-page/schedule-list-page.component';

const routes: Routes = [{ path: '', component: ScheduleListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRoutingModule {}
