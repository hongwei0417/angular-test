import { createAction, props, union } from '@ngrx/store';

export const loadTxnList = createAction('[TxnListPage] Load TxnList');

export const deleteTxn = createAction(
  '[TxnListPage] Delete Txn',
  props<{ id: string }>()
);

const all = union({
  loadTxnList,
  deleteTxn,
});
export type TxnListPageActionUnion = typeof all;
