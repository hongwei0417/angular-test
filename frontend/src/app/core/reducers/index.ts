import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import { InjectionToken } from '@angular/core';

export interface State {
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => {
    return {
      router: fromRouter.routerReducer,
    };
  },
});

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

/**
 * Router Selectors
 */
export const selectRouter =
  createFeatureSelector<fromRouter.RouterReducerState>('router');

export const {
  selectUrl,
  selectRouteData,
  selectCurrentRoute,
  selectFragment,
  selectQueryParam,
  selectQueryParams,
  selectRouteParam,
  selectRouteParams,
} = fromRouter.getSelectors(selectRouter);
