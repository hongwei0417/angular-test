import { createAction, props, union } from '@ngrx/store';

export const createTxn = createAction(
  '[TxnCreatePage] Create Transaction',
  props<{ title: string; content: string; executeCount: number }>()
);

export const clearTxnCreatePageState = createAction(
  '[TxnCreatePage] Clear TxnCreate Page State'
);

const all = union({
  createTxn,
  clearTxnCreatePageState,
});
export type TxnCreatePageActionUnion = typeof all;
