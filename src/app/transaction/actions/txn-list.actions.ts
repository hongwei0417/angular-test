import { createAction, props, union } from '@ngrx/store';

export const loadTxnLists = createAction(
  '[TxnList] Load TxnLists'
);

export const loadTxnListsSuccess = createAction(
  '[TxnList] Load TxnLists Success',
  props<{ data: any }>()
);

export const loadTxnListsFailure = createAction(
  '[TxnList] Load TxnLists Failure',
  props<{ error: any }>()
)

const all = union({ loadTxnLists, loadTxnListsSuccess, loadTxnListsFailure });
export type TxnListActionUnion = typeof all;
