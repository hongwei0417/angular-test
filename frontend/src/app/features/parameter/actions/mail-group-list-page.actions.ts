import { createAction, props } from '@ngrx/store';

export const loadMailGroupListTable = createAction(
  '[MailGroupListPage] Load mail group page table data',
  props<{ mailGroups: any[] }>()
);

export const clearMailGroupListPageState = createAction(
  '[MailGroupListPage] Clear mail group list page state'
);
