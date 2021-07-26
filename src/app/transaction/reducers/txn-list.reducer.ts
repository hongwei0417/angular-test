import { Transaction } from './../models/Transaction';
import { loadTxnLists } from './../actions/txn-list.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { TxnListActions, TxnListApiActions } from '../actions';

export const transactionsFeatureKey = 'transactions';

export interface State {
  loaded: boolean;
  loading: boolean;
  data: Transaction[];
}

export const initialState: State = {
  loaded: false,
  loading: false,
  data: [],
};

const featureReducer = createReducer(
  initialState,
  on(TxnListActions.loadTxnLists, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(TxnListApiActions.loadTxnListApisSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      data: action.data,
    };
  })
);

export function reducer(
  state: State | undefined,
  action:
    | TxnListActions.TxnListActionUnion
    | TxnListApiActions.TxnListActionUnion
) {
  return featureReducer(state, action);
}

export const getData = (state: State) => state.data;
