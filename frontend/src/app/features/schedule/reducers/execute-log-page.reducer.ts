import { required } from 'ngrx-forms/validation';
import {
  FormGroupState,
  createFormGroupState,
  onNgrxForms,
  updateGroup,
  validate,
  wrapReducerWithFormStateUpdate,
  setValue,
  Boxed,
  box,
} from 'ngrx-forms';
import { ExecuteLogTableRow } from './../models/ExecuteLogTable';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ExecuteLogPageActions } from '../actions';

export const FeatureKey = 'executeLogPage';

export interface SearchFormValue {
  globalFilter: string;
  transactionName: string;
  date: Boxed<string[]>;
}

export interface State extends EntityState<ExecuteLogTableRow> {
  loading: boolean;
  loaded: boolean;
  searchForm: FormGroupState<SearchFormValue>;
}

export const adapter: EntityAdapter<ExecuteLogTableRow> =
  createEntityAdapter<ExecuteLogTableRow>({
    selectId: (s) => s.TRANSACTIONID,
    sortComparer: false,
  });

export const validateForm = updateGroup<SearchFormValue>({
  transactionName: validate(required),
  // date: (s, ps) => {
  //   return s.value ? s : setValue(s, new Date().toISOString());
  // },
});

export const searchFormState = createFormGroupState<SearchFormValue>(
  FeatureKey,
  {
    globalFilter: '',
    transactionName: '',
    // date: box(['', '']),
    date: box([new Date().toString(), new Date().toString()]),
  }
);

export const initialState: State = adapter.getInitialState({
  loading: true,
  loaded: false,
  searchForm: searchFormState,
});

export const rawReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(ExecuteLogPageActions.clearExecuteLogPageState, (state, action) => {
    return initialState;
  }),
  on(ExecuteLogPageActions.loadExecuteLogTable, (state, { executeLogs }) => {
    return adapter.addMany(executeLogs, {
      ...state,
      loading: false,
      loaded: true,
    });
  })
);

export const reducer = wrapReducerWithFormStateUpdate(
  rawReducer,
  (state: State) => state.searchForm,
  validateForm
);

export const getSearchForm = (state: State) => state.searchForm;
