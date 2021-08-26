import {
  AlarmStateTable,
  AlarmStateTableRow,
} from './../models/AlarmStateTable';
import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFormGroupState, FormGroupState, onNgrxForms } from 'ngrx-forms';
import { AlarmStatePageActions } from '../actions';

export const FeatureKey = 'alarmStatePage';

export interface SearchFormValue {
  globalFilter: string;
}

export interface State extends EntityState<AlarmStateTableRow> {
  loading: boolean;
  loaded: boolean;
  searchForm: FormGroupState<SearchFormValue>;
}

export const adapter: EntityAdapter<AlarmStateTableRow> =
  createEntityAdapter<AlarmStateTableRow>({
    selectId: (s) => s.TransactionId,
    sortComparer: false,
  });

export const searchFormState = createFormGroupState<SearchFormValue>(
  FeatureKey,
  {
    globalFilter: '',
  }
);

export const initialState: State = adapter.getInitialState({
  loading: true,
  loaded: false,
  searchForm: searchFormState,
});

export const reducer = createReducer(
  initialState,
  onNgrxForms(),
  on(AlarmStatePageActions.clearAlarmStatePageState, (state, action) => {
    return initialState;
  }),
  on(AlarmStatePageActions.loadAlarmStateTable, (state, { alarmStates }) => {
    return adapter.addMany(alarmStates, {
      ...state,
      loading: false,
      loaded: true,
    });
  })
);

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getSearchForm = (state: State) => state.searchForm;
