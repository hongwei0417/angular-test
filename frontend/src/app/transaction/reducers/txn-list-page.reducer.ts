import { Transaction } from '../models/Transaction';
import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TxnApiActions, TxnListPageActions } from '../actions';

export const FeatureKey = 'txnListPage';

export interface State extends EntityState<Transaction> {
  loaded: boolean;
  loading: boolean;
  latestId: string | null;
}

export const adapter: EntityAdapter<Transaction> =
  createEntityAdapter<Transaction>({
    selectId: (txn) => txn.id,
    sortComparer: false,
  });

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  latestId: null,
});

const featureReducer = createReducer(
  initialState,
  on(TxnListPageActions.loadTxnList, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(TxnApiActions.loadTxnApiSuccess, (state, action) => {
    return adapter.addMany(action.txns, {
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
  })
);

export function reducer(
  state: State | undefined,
  action:
    | TxnListPageActions.TxnListPageActionUnion
    | TxnApiActions.TxnApiActionUnion
) {
  return featureReducer(state, action);
}

export const getLatestId = (state: State) => state.latestId;
