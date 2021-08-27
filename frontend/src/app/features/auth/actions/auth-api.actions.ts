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
