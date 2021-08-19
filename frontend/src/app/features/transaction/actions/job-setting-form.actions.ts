import { createAction, props } from '@ngrx/store';

export const addJobSetting = createAction(
  '[JobSetting] add a job setting option'
);

export const removeJobSetting = createAction(
  '[JobSetting] remove a job setting option',
  props<{ id: number }>()
);
