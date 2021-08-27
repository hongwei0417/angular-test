import { createAction, props } from '@ngrx/store';

export const showHttpError = createAction(
  '[Http] show error form http',
  props<{ message: string }>()
);
