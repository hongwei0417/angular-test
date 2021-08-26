import { createAction, props } from '@ngrx/store';

export const loadAlarmStateTable = createAction(
  '[AlarmStatePage] Load alarm state table',
  props<{ alarmStates: any }>()
);

export const clearAlarmStatePageState = createAction(
  '[AlarmStatePage] Clear alarm state page state'
);
