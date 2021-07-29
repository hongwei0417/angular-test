import { createAction, props, union } from '@ngrx/store';

export const loginAuthApisSuccess = createAction(
  '[AuthApi] Login AuthApis Success',
  props<{ user: any }>()
);

export const loginAuthApisFailure = createAction(
  '[AuthApi] Login AuthApis Failure',
  props<{ error: any }>()
);

export const loginRedirect = createAction('[AuthApi] loginRedirect');

const all = union({
  loginAuthApisSuccess,
  loginAuthApisFailure,
  loginRedirect,
});
export type ActionsUnion = typeof all;
