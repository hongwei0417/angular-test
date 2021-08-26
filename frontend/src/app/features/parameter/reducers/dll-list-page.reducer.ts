import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { createFormGroupState, FormGroupState, onNgrxForms } from 'ngrx-forms';
import { DllListPageActions } from '../actions';
import { DllListTableRow } from '../models/Dll';

export const FeatureKey = 'dllListPage';

export interface SearchFormValue {
  globalFilter: string;
}

export interface State extends EntityState<DllListTableRow> {
  loading: boolean;
  loaded: boolean;
  searchForm: FormGroupState<SearchFormValue>;
}

export const adapter: EntityAdapter<DllListTableRow> =
  createEntityAdapter<DllListTableRow>({
    selectId: (s) => s.DLL_SEQ,
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
  on(DllListPageActions.loadDllListTable, (state, { type, dlls }) => {
    return adapter.addMany(dlls, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  on(DllListPageActions.clearDllListPageState, (state, action) => {
    return initialState;
  })
);

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getSearchForm = (state: State) => state.searchForm;
