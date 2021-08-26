import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { DllListTableRow } from '../../models/Dll';
import { SearchFormValue } from '../../reducers/dll-list-page.reducer';
import * as fromParameter from '../../reducers';
import { DllListPageActions } from '../../actions';
import { dllListTableData } from '../../testing/data/dll-list';

@Component({
  selector: 'app-dll-list-page',
  templateUrl: './dll-list-page.component.html',
  styleUrls: ['./dll-list-page.component.scss'],
})
export class DllListPageComponent implements OnInit, OnDestroy {
  searchForm$!: Observable<FormGroupState<SearchFormValue>>;
  dlls$!: Observable<DllListTableRow[]>;

  constructor(private store$: Store<fromParameter.State>) {}

  ngOnInit(): void {
    this.searchForm$ = this.store$.select(fromParameter.getDllListSearchForm);
    this.dlls$ = this.store$.select(fromParameter.getAllDlls);
    this.store$.dispatch(
      DllListPageActions.loadDllListTable({
        dlls: dllListTableData,
      })
    );
  }

  ngOnDestroy(): void {
    this.store$.dispatch(DllListPageActions.clearDllListPageState());
  }
}
