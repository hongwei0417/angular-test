import { createAction, props, union } from '@ngrx/store';

export const createTxnCreates = createAction(
  '[TxnCreate] Create TxnCreates',
  props<{ title: string }>()
);

export const clearTxnCreateState = createAction(
  '[TxnCreate] Clear TxnCreate Page State'
);

const all = union({
  createTxnCreates,
  clearTxnCreateState,
});
export type TxnListActionUnion = typeof all;
