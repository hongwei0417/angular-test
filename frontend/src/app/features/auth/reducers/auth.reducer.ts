import { Action, createReducer, on } from '@ngrx/store';
import { AuthApiActions, LoginPageActions } from '../actions';

export const authFeatureKey = 'status';

export interface IState {
  user: any;
  authed: boolean;
}

export const initialState: IState = {
  user: null,
  authed: false,
};

const featureReducer = createReducer(
  initialState,
  on(LoginPageActions.login, (state) => state),
  on(AuthApiActions.loginAuthApisSuccess, (state, action) => {
    return { ...state, authed: true, user: action.user };
  })
);

export function reducer(
  state: IState | undefined,
  action: LoginPageActions.ActionsUnion | AuthApiActions.ActionsUnion
) {
  return featureReducer(state, action);
}

export const getUser = (state: IState) => state.user;
export const getAuthed = (state: IState) => state.authed;
