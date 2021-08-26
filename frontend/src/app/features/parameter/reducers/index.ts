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
import * as fromMailGroupListPage from './mailGroup-list-page.reducer';
import * as fromDllListPage from './dll-list-page.reducer';
import * as fromDllFormPage from './dll-form-page.reducer';

export const FeatureKey = 'parameter';
export const FormFeatureKey = 'parameterFormState';

export interface ParameterFormState {
  [fromDllFormPage.FeatureKey]: fromDllFormPage.State;
}

export interface ParameterState {
  [fromMailGroupListPage.FeatureKey]: fromMailGroupListPage.State;
  [fromDllListPage.FeatureKey]: fromDllListPage.State;
  [FormFeatureKey]: ParameterFormState;
}

export interface State extends fromRoot.State {
  [FeatureKey]: ParameterState;
}

/** Provide reducer in AoT-compilation happy way */
export const parameterFormReducers = (
  state: ParameterFormState | undefined,
  action: Action
) => {
  return combineReducers({
    [fromDllFormPage.FeatureKey]: fromDllFormPage.reducer,
  })(state, action);
};

export const reducers = (state: ParameterState | undefined, action: Action) => {
  return combineReducers({
    [fromMailGroupListPage.FeatureKey]: fromMailGroupListPage.reducer,
    [fromDllListPage.FeatureKey]: fromDllListPage.reducer,
    [FormFeatureKey]: parameterFormReducers,
  })(state, action);
};

// feature selectors
export const getParameterState = createFeatureSelector<State, ParameterState>(
  FeatureKey
);

// sub feature selectors
export const getMailGroupListPageState = createSelector(
  getParameterState,
  (state: ParameterState) => state[fromMailGroupListPage.FeatureKey]
);

export const getDllListPageState = createSelector(
  getParameterState,
  (state: ParameterState) => state[fromDllListPage.FeatureKey]
);

export const getDllFormPageState = createSelector(
  getParameterState,
  (state: ParameterState) => state[FormFeatureKey][fromDllFormPage.FeatureKey]
);

// selectors
export const getMailGroupListSearchForm = createSelector(
  getMailGroupListPageState,
  fromMailGroupListPage.getSearchForm
);

export const {
  selectAll: getAllMailGroups,
  selectEntities: getMailGroupEntities,
  selectIds: getMailGroupIds,
  selectTotal: getTotalMailGroups,
} = fromMailGroupListPage.adapter.getSelectors(getMailGroupListPageState);

export const getDllListSearchForm = createSelector(
  getDllListPageState,
  fromDllListPage.getSearchForm
);

export const {
  selectAll: getAllDlls,
  selectEntities: getDkkEntities,
  selectIds: getDllIds,
  selectTotal: getTotalDlls,
} = fromDllListPage.adapter.getSelectors(getDllListPageState);

export const getDllFormState = createSelector(
  getDllFormPageState,
  fromDllFormPage.getFormState
);

export const getDllFormLoading = createSelector(
  getDllFormPageState,
  fromDllFormPage.getLoading
);

export const getDllFormLoaded = createSelector(
  getDllFormPageState,
  fromDllFormPage.getLoaded
);

export const getDllFormLoadCompleted = createSelector(
  getDllFormLoading,
  getDllFormLoaded,
  (loading, loaded) => !loading && loaded
);
