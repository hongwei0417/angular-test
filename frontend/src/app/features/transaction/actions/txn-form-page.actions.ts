import { createAction, props, union } from '@ngrx/store';

export const createTxn = createAction(
  '[TxnFormPage] Create Transaction',
  props<{ title: string; content: string; executeCount: number }>()
);

export const clearTxnCreatePageState = createAction(
  '[TxnFormPage] Clear TxnCreate Page State'
);
