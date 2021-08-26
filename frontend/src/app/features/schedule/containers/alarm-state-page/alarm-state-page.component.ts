import { alarmStateTableData } from '../../testing/data/alarm-state-table';
import { AlarmStateTableRow } from './../../models/AlarmStateTable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { SearchFormValue } from '../../reducers/alarm-state-page.reducer';
import * as fromSchedule from '../../reducers';
import { Store } from '@ngrx/store';
import { AlarmStatePageActions } from '../../actions';

@Component({
  selector: 'app-alarm-state-page',
  templateUrl: './alarm-state-page.component.html',
  styleUrls: ['./alarm-state-page.component.scss'],
})
export class AlarmStatePageComponent implements OnInit, OnDestroy {
  searchForm$!: Observable<FormGroupState<SearchFormValue>>;
  alarmStates$!: Observable<AlarmStateTableRow[]>;

  constructor(private store$: Store<fromSchedule.State>) {}

  ngOnInit(): void {
    this.alarmStates$ = this.store$.select(fromSchedule.getAllAlarmStates);
    this.searchForm$ = this.store$.select(
      fromSchedule.getAlarmStatePageSearchForm
    );
    this.store$.dispatch(
      AlarmStatePageActions.loadAlarmStateTable({
        alarmStates: alarmStateTableData,
      })
    );
  }

  ngOnDestroy(): void {
    this.store$.dispatch(AlarmStatePageActions.clearAlarmStatePageState());
  }
}
