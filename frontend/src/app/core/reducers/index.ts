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

export interface IState {
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<IState> = {
  router: fromRouter.routerReducer,
};

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<IState, Action>
>('Root reducers token', {
  factory: () => {
    return {
      router: fromRouter.routerReducer,
    };
  },
});

export const metaReducers: MetaReducer<IState>[] = !environment.production
  ? []
  : [];
