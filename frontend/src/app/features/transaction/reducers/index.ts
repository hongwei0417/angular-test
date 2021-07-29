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

export interface ITxnState {
  [fromTxnListPage.FeatureKey]: fromTxnListPage.IState;
  [fromTxnCreatePage.FeatureKey]: fromTxnCreatePage.IState;
}
export interface IState extends fromRoot.IState {
  txn: ITxnState;
}

// export const reducers: ActionReducerMap<TxnState, any> = {
//   [fromTxnListPage.FeatureKey]: fromTxnListPage.reducer,
//   [fromTxnCreatePage.FeatureKey]: fromTxnCreatePage.reducer,
// };

/** Provide reducer in AoT-compilation happy way */
export const reducers = (state: ITxnState | undefined, action: Action) => {
  return combineReducers({
    [fromTxnListPage.FeatureKey]: fromTxnListPage.reducer,
    [fromTxnCreatePage.FeatureKey]: fromTxnCreatePage.reducer,
  })(state, action);
};

// selectors
export const getTxnState = createFeatureSelector<IState, ITxnState>(FeatureKey);

export const getTxnListPageEntitiesState = createSelector(
  getTxnState,
  (state: ITxnState) => state[fromTxnListPage.FeatureKey]
);

export const getLatestBookId = createSelector(
  getTxnListPageEntitiesState,
  fromTxnListPage.getLatestId
);

export const {
  selectAll: getAllTxns,
  selectEntities: getTxnEntities,
  selectIds: getTxnIds,
  selectTotal: getTotalTxns,
} = fromTxnListPage.adapter.getSelectors(getTxnListPageEntitiesState);

export const getLatestTxn = createSelector(
  getTxnEntities,
  getLatestBookId,
  (entities, latestId) => {
    return latestId && entities[latestId];
  }
);

export const getTxnCreatePageState = createSelector(
  getTxnState,
  (state: ITxnState) => state[fromTxnCreatePage.FeatureKey]
);

export const getTxnCreateError = createSelector(
  getTxnCreatePageState,
  fromTxnCreatePage.getError
);
