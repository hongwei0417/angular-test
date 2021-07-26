import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromTxnList from './txn-list.reducer';
import * as fromTxnCreate from './txn-create.reducer';

export const FeatureKey = 'txn';

export interface TxnState {
  txnList: fromTxnList.State;
  txnCreate: fromTxnCreate.State;
}
export interface State extends fromRoot.State {
  txn: TxnState;
}

export const reducers: ActionReducerMap<TxnState, any> = {
  txnList: fromTxnList.reducer,
  txnCreate: fromTxnCreate.reducer,
};

export const getTxnState = createFeatureSelector<State, TxnState>(FeatureKey);

export const getTxnListState = createSelector(
  getTxnState,
  (state: TxnState) => state.txnList
);

export const getTxnListData = createSelector(
  getTxnListState,
  fromTxnList.getData
);

export const getTxnCreateState = createSelector(
  getTxnState,
  (state: TxnState) => state.txnCreate
);

export const getTxnCreateError = createSelector(
  getTxnCreateState,
  fromTxnCreate.getError
);
