import { ExecuteLogTableRow } from './../../models/ExecuteLogTable';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchFormValue } from '../../reducers/execute-log-page.reducer';
import * as fromSchedule from '../../reducers';
import { ExecuteLogPageActions } from '../../actions';
import { executeLogTableData } from 'src/app/shared/testing/data/executeLogTable';

@Component({
  selector: 'app-execute-log-page',
  templateUrl: './execute-log-page.component.html',
  styleUrls: ['./execute-log-page.component.scss'],
})
export class ExecuteLogPageComponent implements OnInit, OnDestroy {
  searchForm$!: Observable<FormGroupState<SearchFormValue>>;
  executeLogs$!: Observable<ExecuteLogTableRow[]>;

  constructor(private store$: Store<fromSchedule.State>) {}

  ngOnInit(): void {
    this.searchForm$ = this.store$.select(
      fromSchedule.getExecuteLogPageSearchForm
    );
    this.executeLogs$ = this.store$.select(fromSchedule.getAllExecuteLogs);
    this.store$.dispatch(
      ExecuteLogPageActions.loadExecuteLogTable({
        executeLogs: executeLogTableData,
      })
    );
  }

  ngOnDestroy(): void {
    this.store$.dispatch(ExecuteLogPageActions.clearExecuteLogPageState());
  }
}
