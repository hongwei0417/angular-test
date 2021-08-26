import { FormGroupState, createFormGroupState, onNgrxForms } from 'ngrx-forms';
import { filter } from 'rxjs/operators';
import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ScheduleTableRow } from '../models/ScheduleTable';
import { ScheduleListPageActions } from '../actions';

export const FeatureKey = 'scheduleListPage';

export interface SearchFormValue {
  globalFilter: string;
}

export interface State extends EntityState<ScheduleTableRow> {
  loading: boolean;
  loaded: boolean;
  searchForm: FormGroupState<SearchFormValue>;
}

export const adapter: EntityAdapter<ScheduleTableRow> =
  createEntityAdapter<ScheduleTableRow>({
    selectId: (s) => s.TransactionId,
    sortComparer: false,
  });

export const filterFormState = createFormGroupState<SearchFormValue>(
  FeatureKey,
  {
    globalFilter: '',
  }
);

export const initialState: State = adapter.getInitialState({
  loading: true,
  loaded: false,
  searchForm: filterFormState,
});

export const reducer = createReducer(
  initialState,
  onNgrxForms(),
  on(
    ScheduleListPageActions.loadScheduleListTable,
    (state, { type, schedules }) => {
      return adapter.addMany(schedules, {
        ...state,
        loading: false,
        loaded: true,
      });
    }
  ),
  on(ScheduleListPageActions.clearScheduleListPageState, (state, action) => {
    return initialState;
  })
);

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getFilterForm = (state: State) => state.searchForm;
