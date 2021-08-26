import { createAction, props } from '@ngrx/store';

export const loadDllListTable = createAction(
  '[DllListPage] Load dll list page table data',
  props<{ dlls: any[] }>()
);

export const clearDllListPageState = createAction(
  '[DllListPage] Clear dll list page state'
);
