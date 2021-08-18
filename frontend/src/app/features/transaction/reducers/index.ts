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
import * as fromBasicInfoForm from './basic-info-form.reducer';
import * as fromFrequencyForm from './frequency-setting-form.reducer';
import * as fromModuleForm from './module-form.reducer';
import * as fromMailGroupForm from './mail-group-form.reducer';
import * as fromJobSettingForm from './job-setting-form.reducer';

export const FeatureKey = 'transaction';

export interface TxnState {
  [fromTxnListPage.FeatureKey]: fromTxnListPage.State;
  [fromTxnFormPage.FeatureKey]: fromTxnFormPage.State;
  txnFormState: TxnFormState;
}
export interface TxnFormState {
  [fromBasicInfoForm.FeatureKey]: fromBasicInfoForm.State;
  [fromFrequencyForm.FeatureKey]: fromFrequencyForm.State;
  [fromModuleForm.FeatureKey]: fromModuleForm.State;
  [fromMailGroupForm.FeatureKey]: fromMailGroupForm.State;
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
    [fromBasicInfoForm.FeatureKey]: fromBasicInfoForm.reducer,
    [fromFrequencyForm.FeatureKey]: fromFrequencyForm.reducer,
    [fromModuleForm.FeatureKey]: fromModuleForm.reducer,
    [fromMailGroupForm.FeatureKey]: fromMailGroupForm.reducer,
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
export const getTxnListPageEntitiesState = createSelector(
  getTxnState,
  (state: TxnState) => state[fromTxnListPage.FeatureKey]
);

export const getTxnFormPageState = createSelector(
  getTxnState,
  (state: TxnState) => state[fromTxnFormPage.FeatureKey]
);

export const getBasicInfoFormState = createSelector(
  getTxnState,
  (state: TxnState) => state.txnFormState[fromBasicInfoForm.FeatureKey]
);

export const getFqSettingFormState = createSelector(
  getTxnState,
  (state: TxnState) => state.txnFormState[fromFrequencyForm.FeatureKey]
);

export const getModuleFormState = createSelector(
  getTxnState,
  (state: TxnState) => state.txnFormState[fromModuleForm.FeatureKey]
);

export const getMailGroupFormState = createSelector(
  getTxnState,
  (state: TxnState) => state.txnFormState[fromMailGroupForm.FeatureKey]
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
  getTxnFormPageState,
  fromTxnFormPage.getError
);

export const getTxnSettingForm = createSelector(
  getBasicInfoFormState,
  fromBasicInfoForm.getTxnBasicInfoForm
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

export const getJobSettingForm = createSelector(
  getJobSettingFormState,
  fromJobSettingForm.getFormState
);

export const getSingleJobOptions = createSelector(
  getJobSettingFormState,
  fromJobSettingForm.getSingleJobOptions
);
