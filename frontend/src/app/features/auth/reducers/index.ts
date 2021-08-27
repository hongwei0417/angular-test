import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as fromRoot from '../../../core/reducers';
import * as fromAuth from './auth.reducer';
import { AuthApiActions, LoginPageActions } from '../actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export const reducers: ActionReducerMap<AuthState, Action> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer,
};

export const getAuthFeatureState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

export const getAuthState = createSelector(
  getAuthFeatureState,
  (state) => state[fromAuth.authFeatureKey]
);

export const getUser = createSelector(getAuthState, fromAuth.getUser);

export const getAuthed = createSelector(getAuthState, fromAuth.getAuthed);
