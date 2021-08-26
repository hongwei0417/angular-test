import { FormGroupState } from 'ngrx-forms';
import { ScheduleTableRow } from './../../models/ScheduleTable';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScheduleListPageActions } from '../../actions';
import { scheduleListTableData } from '../../testing/data/schedule-list-table';
import * as fromSchedule from '../../reducers';
import { SearchFormValue } from '../../reducers/schedule-list-page.reducer';
@Component({
  selector: 'app-schedule-list-page',
  templateUrl: './schedule-list-page.component.html',
  styleUrls: ['./schedule-list-page.component.scss'],
})
export class ScheduleListPageComponent implements OnInit, OnDestroy {
  schedules$!: Observable<ScheduleTableRow[]>;
  searchForm$!: Observable<FormGroupState<SearchFormValue>>;
  constructor(private store$: Store<fromSchedule.State>) {}

  ngOnInit(): void {
    this.schedules$ = this.store$.select(fromSchedule.getAllSchedules);
    this.searchForm$ = this.store$.select(
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
