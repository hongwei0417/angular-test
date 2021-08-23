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
import * as fromTxnFormPage from './txn-form-page.reducer';
import * as fromTxnSettingForm from './txn-setting-form.reducer';
import * as fromJobSettingForm from './job-setting-form.reducer';

export const FeatureKey = 'transaction';

export interface TxnState {
  [fromTxnListPage.FeatureKey]: fromTxnListPage.State;
  [fromTxnFormPage.FeatureKey]: fromTxnFormPage.State;
  txnFormState: TxnFormState;
}
export interface TxnFormState {
  [fromTxnSettingForm.FeatureKey]: fromTxnSettingForm.State;
  [fromJobSettingForm.FeatureKey]: fromJobSettingForm.State;
}
export interface State extends fromRoot.State {
  [FeatureKey]: TxnState;
}

export const txnFormReducers = (
  state: TxnFormState | undefined,
  action: Action
) =>
  combineReducers({
    [fromTxnSettingForm.FeatureKey]: fromTxnSettingForm.reducer,
    [fromJobSettingForm.FeatureKey]: fromJobSettingForm.reducer,
  })(state, action);

/** Provide reducer in AoT-compilation happy way */
export const reducers = (state: TxnState | undefined, action: Action) => {
  return combineReducers({
    [fromTxnListPage.FeatureKey]: fromTxnListPage.reducer,
    [fromTxnFormPage.FeatureKey]: fromTxnFormPage.reducer,
    txnFormState: txnFormReducers,
  })(state, action);
};

// feature selectors
export const getTxnState = createFeatureSelector<State, TxnState>(FeatureKey);

// sub reducers basic state
export const getTxnListPageState = createSelector(
  getTxnState,
  (state: TxnState) => state[fromTxnListPage.FeatureKey]
);

export const getTxnFormPageState = createSelector(
  getTxnState,
  (state: TxnState) => state[fromTxnFormPage.FeatureKey]
);

export const getTxnSettingFormState = createSelector(
  getTxnState,
  (state: TxnState) => state.txnFormState[fromTxnSettingForm.FeatureKey]
);

export const getJobSettingFormState = createSelector(
  getTxnState,
  (state: TxnState) => state.txnFormState[fromJobSettingForm.FeatureKey]
);

// selectors
export const {
  selectAll: getAllTxns,
  selectEntities: getTxnEntities,
  selectIds: getTxnIds,
  selectTotal: getTotalTxns,
} = fromTxnListPage.adapter.getSelectors(getTxnListPageState);

export const getLatestTxnId = createSelector(
  getTxnListPageState,
  fromTxnListPage.getLatestId
);

export const getLatestTxn = createSelector(
  getTxnEntities,
  getLatestTxnId,
  (entities, latestId) => {
    return latestId && entities[latestId];
  }
);

export const getFilterForm = createSelector(
  getTxnListPageState,
  fromTxnListPage.getFilterForm
);

export const getTxnSettingForm = createSelector(
  getTxnSettingFormState,
  fromTxnSettingForm.getFormState
);

export const getFqSettingOptions = createSelector(
  getTxnSettingFormState,
  fromTxnSettingForm.getFqOptions
);

export const getFqShowAccordions = createSelector(
  getTxnSettingFormState,
  fromTxnSettingForm.getShowAccordions
);

export const getModuleOptions = createSelector(
  getTxnSettingFormState,
  fromTxnSettingForm.getModuleOptions
);

export const getJobSettingForm = createSelector(
  getJobSettingFormState,
  fromJobSettingForm.getFormState
);

export const getSingleJobOptions = createSelector(
  getJobSettingFormState,
  fromJobSettingForm.getSingleJobOptions
);
