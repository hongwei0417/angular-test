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

export const FeatureKey = 'schedule';

export interface ScheduleState {
  [fromScheduleListPage.FeatureKey]: fromScheduleListPage.State;
}

export interface State extends fromRoot.State {
  [FeatureKey]: ScheduleState;
}

/** Provide reducer in AoT-compilation happy way */
export const reducers = (state: ScheduleState | undefined, action: Action) => {
  return combineReducers({
    [fromScheduleListPage.FeatureKey]: fromScheduleListPage.reducer,
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

// selectors
export const getScheduleListPageFilterForm = createSelector(
  getScheduleListPageState,
  fromScheduleListPage.getFilterForm
);

export const {
  selectAll: getAllSchedules,
  selectEntities: getScheduleEntities,
  selectIds: getScheduleIds,
  selectTotal: getTotalSchedules,
} = fromScheduleListPage.adapter.getSelectors(getScheduleListPageState);
