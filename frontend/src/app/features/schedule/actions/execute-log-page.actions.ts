import { createAction, props } from '@ngrx/store';

export const loadExecuteLogTable = createAction(
  '[ExecuteLogPage] Load execute log table data',
  props<{ executeLogs: any[] }>()
);

export const clearExecuteLogPageState = createAction(
  '[ExecuteLogPage] Clear execute log page state'
);
