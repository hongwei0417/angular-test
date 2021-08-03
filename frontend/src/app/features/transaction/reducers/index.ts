import {
  Action,
  ActionReducer,
  ActionReducerMap,
  combineReducers,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as fromRoot from '../../../core/reducers';
import * as fromTxnListPage from './txn-list-page.reducer';
import * as fromTxnCreatePage from './txn-create-page.reducer';

export const FeatureKey = 'txn';

export interface TxnState {
  [fromTxnListPage.FeatureKey]: fromTxnListPage.State;
  [fromTxnCreatePage.FeatureKey]: fromTxnCreatePage.State;
}
export interface State extends fromRoot.State {
  [FeatureKey]: TxnState;
}

/** Provide reducer in AoT-compilation happy way */
export const reducers = (state: TxnState | undefined, action: Action) => {
  return combineReducers({
    [fromTxnListPage.FeatureKey]: fromTxnListPage.reducer,
    [fromTxnCreatePage.FeatureKey]: fromTxnCreatePage.reducer,
  })(state, action);
};

// selectors
export const getTxnState = createFeatureSelector<State, TxnState>(FeatureKey);

export const getTxnListPageEntitiesState = createSelector(
  getTxnState,
  (state: TxnState) => state[fromTxnListPage.FeatureKey]
);

export const {
  selectAll: getAllTxns,
  selectEntities: getTxnEntities,
  selectIds: getTxnIds,
  selectTotal: getTotalTxns,
} = fromTxnListPage.adapter.getSelectors(getTxnListPageEntitiesState);

export const getLatestTxnId = createSelector(
  getTxnListPageEntitiesState,
  fromTxnListPage.getLatestId
);

export const getLatestTxn = createSelector(
  getTxnEntities,
  getLatestTxnId,
  (entities, latestId) => {
    return latestId && entities[latestId];
  }
);

export const getTxnCreatePageState = createSelector(
  getTxnState,
  (state: TxnState) => state[fromTxnCreatePage.FeatureKey]
);

export const getTxnCreateError = createSelector(
  getTxnCreatePageState,
  fromTxnCreatePage.getError
);
