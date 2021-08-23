import { createFormGroupState, FormGroupState, onNgrxForms } from 'ngrx-forms';
import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TxnApiActions, TxnListPageActions } from '../actions';
import { TxnListTableRow } from '../models/TxnListTable';

export const FeatureKey = 'txnListPage';
export interface FilterFormValue {
  CustId: string;
  globalFilter: string;
}

export interface State extends EntityState<TxnListTableRow> {
  loaded: boolean;
  loading: boolean;
  latestId: string | null;
  filterForm: FormGroupState<FilterFormValue>;
}

export const filterFormState = createFormGroupState<FilterFormValue>(
  FeatureKey,
  {
    CustId: '',
    globalFilter: '',
  }
);

export const adapter: EntityAdapter<TxnListTableRow> =
  createEntityAdapter<TxnListTableRow>({
    selectId: (txn) => txn.TRANSACTIONID,
    sortComparer: false,
  });

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  latestId: null,
  filterForm: filterFormState,
});

export const reducer = createReducer(
  initialState,
  onNgrxForms(),
  on(TxnListPageActions.loadTxnList, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(TxnApiActions.loadTxnApiSuccess, (state, { type, txnData }) => {
    return adapter.addMany(txnData, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  on(TxnApiActions.createTxnApiSuccess, (state, action) => {
    return adapter.addOne(action.txn, state);
  }),
  on(TxnApiActions.deleteTxnApiSuccess, (state, action) => {
    return adapter.removeOne(action.id, state);
  }),
  on(TxnListPageActions.clearTxnListPageState, (state, action) => {
    return initialState;
  })
);

export const {
  selectAll: getAllTxns,
  selectEntities: getTxnEntities,
  selectIds: getTxnIds,
  selectTotal: getTotalTxns,
} = adapter.getSelectors();

export const getLatestId = (state: State) => state.latestId;
export const getFilterForm = (state: State) => state.filterForm;
