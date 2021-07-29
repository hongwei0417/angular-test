import { ITransaction } from '../models/Transaction';
import { createAction, props, union } from '@ngrx/store';

export const loadTxnApiSuccess = createAction(
  '[TxnApi] Load Transaction Success',
  props<{ txns: ITransaction[] }>()
);

export const loadTxnApiFailure = createAction(
  '[TxnApi] Load Transaction Failure',
  props<{ error: any }>()
);

export const deleteTxnApiSuccess = createAction(
  '[TxnApi] Delete Transaction Failure',
  props<{ id: string }>()
);

export const createTxnApiSuccess = createAction(
  '[TxnApi] Create Transaction Success',
  props<{ txn: ITransaction }>()
);

export const createTxnApiFail = createAction(
  '[TxnApi] Create Transaction Failure',
  props<{ error: any }>()
);

const all = union({
  createTxnApiSuccess,
  createTxnApiFail,
  loadTxnApiSuccess,
  loadTxnApiFailure,
  deleteTxnApiSuccess,
});
export type TxnApiActionUnion = typeof all;
