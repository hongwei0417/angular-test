import { createAction, props } from '@ngrx/store';

export const loadScheduleListTable = createAction(
  '[ScheduleListPage] Load schedule list table data',
  props<{ schedules: any[] }>()
);

export const clearScheduleListPageState = createAction(
  '[ScheduleListPage] Clear schedule page state'
);
