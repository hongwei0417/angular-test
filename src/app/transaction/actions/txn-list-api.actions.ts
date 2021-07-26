import { Transaction } from './../models/Transaction';
import { createAction, props, union } from '@ngrx/store';

export const loadTxnListApis = createAction('[TxnListApi] Load TxnListApis');

export const loadTxnListApisSuccess = createAction(
  '[TxnListApi] Load TxnListApis Success',
  props<{ data: Transaction[] }>()
);

export const loadTxnListApisFailure = createAction(
  '[TxnListApi] Load TxnListApis Failure',
  props<{ error: any }>()
);

const all = union({
  loadTxnListApis,
  loadTxnListApisSuccess,
  loadTxnListApisFailure,
});
export type TxnListActionUnion = typeof all;
