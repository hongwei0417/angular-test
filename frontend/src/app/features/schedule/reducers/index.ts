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
import * as fromScheduleListPage from './schedule-list-page.reducer';
import * as fromExecuteLogPage from './execute-log-page.reducer';
import * as fromAlarmStatePage from './alarm-state-page.reducer';

export const FeatureKey = 'schedule';

export interface ScheduleState {
  [fromScheduleListPage.FeatureKey]: fromScheduleListPage.State;
  [fromExecuteLogPage.FeatureKey]: fromExecuteLogPage.State;
  [fromAlarmStatePage.FeatureKey]: fromAlarmStatePage.State;
}

export interface State extends fromRoot.State {
  [FeatureKey]: ScheduleState;
}

/** Provide reducer in AoT-compilation happy way */
export const reducers = (state: ScheduleState | undefined, action: Action) => {
  return combineReducers({
    [fromScheduleListPage.FeatureKey]: fromScheduleListPage.reducer,
    [fromExecuteLogPage.FeatureKey]: fromExecuteLogPage.reducer,
    [fromAlarmStatePage.FeatureKey]: fromAlarmStatePage.reducer,
  })(state, action);
};

// feature selectors
export const getScheduleState = createFeatureSelector<State, ScheduleState>(
  FeatureKey
);

// sub feature selectors
export const getScheduleListPageState = createSelector(
  getScheduleState,
  (state: ScheduleState) => state[fromScheduleListPage.FeatureKey]
);

export const getExecuteLogPageState = createSelector(
  getScheduleState,
  (state: ScheduleState) => state[fromExecuteLogPage.FeatureKey]
);

export const getAlarmStatePageState = createSelector(
  getScheduleState,
  (state: ScheduleState) => state[fromAlarmStatePage.FeatureKey]
);

// selectors
export const getScheduleListPageFilterForm = createSelector(
  getScheduleListPageState,
  fromScheduleListPage.getSearchForm
);

export const {
  selectAll: getAllSchedules,
  selectEntities: getScheduleEntities,
  selectIds: getScheduleIds,
  selectTotal: getTotalSchedules,
} = fromScheduleListPage.adapter.getSelectors(getScheduleListPageState);

export const getExecuteLogPageSearchForm = createSelector(
  getExecuteLogPageState,
  fromExecuteLogPage.getSearchForm
);

export const {
  selectAll: getAllExecuteLogs,
  selectEntities: getExecuteLogEntities,
  selectIds: getExecuteLogIds,
  selectTotal: getTotalExecuteLogs,
} = fromExecuteLogPage.adapter.getSelectors(getExecuteLogPageState);

export const getAlarmStatePageSearchForm = createSelector(
  getAlarmStatePageState,
  fromAlarmStatePage.getSearchForm
);

export const {
  selectAll: getAllAlarmStates,
  selectEntities: getAlarmStateEntities,
  selectIds: getAlarmStateIds,
  selectTotal: getTotalAlarmStates,
} = fromAlarmStatePage.adapter.getSelectors(getAlarmStatePageState);
