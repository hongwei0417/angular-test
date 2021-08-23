import { FormGroupState } from 'ngrx-forms';
import { ScheduleTableRow } from './../../models/ScheduleTable';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScheduleListPageActions } from '../../actions';
import { scheduleListTableData } from 'src/app/shared/testing/data/scheduleListTable';
import * as fromSchedule from '../../reducers';
import { FilterFormValue } from '../../reducers/schedule-list-page.reducer';
@Component({
  selector: 'app-schedule-list-page',
  templateUrl: './schedule-list-page.component.html',
  styleUrls: ['./schedule-list-page.component.scss'],
})
export class ScheduleListPageComponent implements OnInit, OnDestroy {
  schedules$!: Observable<ScheduleTableRow[]>;
  filterForm$!: Observable<FormGroupState<FilterFormValue>>;
  constructor(private store$: Store<fromSchedule.State>) {}

  ngOnInit(): void {
    this.schedules$ = this.store$.select(fromSchedule.getAllSchedules);
    this.filterForm$ = this.store$.select(
      fromSchedule.getScheduleListPageFilterForm
    );
    this.store$.dispatch(
      ScheduleListPageActions.loadScheduleListTable({
        schedules: scheduleListTableData,
      })
    );
  }

  ngOnDestroy(): void {
    this.store$.dispatch(ScheduleListPageActions.clearScheduleListPageState());
  }
}
