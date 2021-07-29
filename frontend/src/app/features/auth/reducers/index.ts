import {
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

export interface IAuthState {
  [fromAuth.authFeatureKey]: fromAuth.IState;
}

export interface IState extends fromRoot.IState {
  [authFeatureKey]: IAuthState;
}

export const reducers: ActionReducerMap<
  IAuthState,
  LoginPageActions.ActionsUnion | AuthApiActions.ActionsUnion
> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer,
};

export const getAuthFeatureState = createFeatureSelector<IState, IAuthState>(
  authFeatureKey
);

export const getAuthState = createSelector(
  getAuthFeatureState,
  (state) => state[fromAuth.authFeatureKey]
);

export const getUser = createSelector(getAuthState, fromAuth.getUser);

export const getAuthed = createSelector(getAuthState, fromAuth.getAuthed);
