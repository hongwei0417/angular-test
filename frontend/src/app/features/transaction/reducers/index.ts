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
import * as fromTxnForm from './txn-setting-form.reducer';
import * as fromFrequencyForm from './frequency-setting-form.reducer';
import * as fromModuleForm from './module-form.reducer';
import * as fromMailGroupForm from './mail-group-form.reducer';

export const FeatureKey = 'txn';

export interface TxnState {
  [fromTxnListPage.FeatureKey]: fromTxnListPage.State;
  [fromTxnCreatePage.FeatureKey]: fromTxnCreatePage.State;
  [fromTxnForm.FeatureKey]: fromTxnForm.State;
  [fromFrequencyForm.FeatureKey]: fromFrequencyForm.State;
  [fromModuleForm.FeatureKey]: fromModuleForm.State;
  [fromMailGroupForm.FeatureKey]: fromMailGroupForm.State;
}
export interface State extends fromRoot.State {
  [FeatureKey]: TxnState;
}

/** Provide reducer in AoT-compilation happy way */
export const reducers = (state: TxnState | undefined, action: Action) => {
  return combineReducers({
    [fromTxnListPage.FeatureKey]: fromTxnListPage.reducer,
    [fromTxnCreatePage.FeatureKey]: fromTxnCreatePage.reducer,
    [fromTxnForm.FeatureKey]: fromTxnForm.reducer,
    [fromFrequencyForm.FeatureKey]: fromFrequencyForm.reducer,
    [fromModuleForm.FeatureKey]: fromModuleForm.reducer,
    [fromMailGroupForm.FeatureKey]: fromMailGroupForm.reducer,
  })(state, action);
};

// feature selectors
export const getTxnState = createFeatureSelector<State, TxnState>(FeatureKey);

// sub reducers basic state
export const getTxnListPageEntitiesState = createSelector(
  getTxnState,
  (state: TxnState) => state[fromTxnListPage.FeatureKey]
);

export const getTxnCreatePageState = createSelector(
  getTxnState,
  (state: TxnState) => state[fromTxnCreatePage.FeatureKey]
);

export const getTxnSettingFormState = createSelector(
  getTxnState,
  (state: TxnState) => state[fromTxnForm.FeatureKey]
);

export const getFqSettingFormState = createSelector(
  getTxnState,
  (state: TxnState) => state[fromFrequencyForm.FeatureKey]
);

export const getModuleFormState = createSelector(
  getTxnState,
  (state: TxnState) => state[fromModuleForm.FeatureKey]
);

export const getMailGroupFormState = createSelector(
  getTxnState,
  (state: TxnState) => state[fromMailGroupForm.FeatureKey]
);

// selectors
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

export const getTxnCreateError = createSelector(
  getTxnCreatePageState,
  fromTxnCreatePage.getError
);

export const getTxnSettingForm = createSelector(
  getTxnSettingFormState,
  fromTxnForm.getTxnSettingForm
);

export const getFqSettingForm = createSelector(
  getFqSettingFormState,
  fromFrequencyForm.getFormState
);

export const getFqSettingOptions = createSelector(
  getFqSettingFormState,
  fromFrequencyForm.getOptions
);

export const getFqSettingShowAccordions = createSelector(
  getFqSettingFormState,
  fromFrequencyForm.getShowAccordions
);

export const getModuleForm = createSelector(
  getModuleFormState,
  fromModuleForm.getFormState
);

export const getModuleOptions = createSelector(
  getModuleFormState,
  fromModuleForm.getOptions
);

export const getMailGroupForm = createSelector(
  getMailGroupFormState,
  fromMailGroupForm.getFormState
);
