import { Action, createReducer, on } from '@ngrx/store';
import { AuthApiActions, LoginPageActions } from '../actions';

export const authFeatureKey = 'status';

export interface State {
  user: any;
  authed: boolean;
  token: string;
}

export const initialState: State = {
  user: null,
  authed: false,
  token: '',
};

const featureReducer = createReducer(
  initialState,
  on(LoginPageActions.login, (state) => state),
  on(AuthApiActions.loginAuthApisSuccess, (state, action) => {
    return { ...state, authed: true, user: action.user };
  })
);

export function reducer(state: State | undefined, action: Action): State {
  return featureReducer(state, action);
}

export const getUser = (state: State) => state.user;
export const getAuthed = (state: State) => state.authed;
