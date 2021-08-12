import { createAction, props, union } from '@ngrx/store';
import { TxnListTableRow } from '../models/TxnListTable';

export const loadTxnApiSuccess = createAction(
  '[TxnApi] Load Transaction Success',
  props<{ txnData: TxnListTableRow[] }>()
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
  props<{ txn: TxnListTableRow }>()
);

export const createTxnApiFail = createAction(
  '[TxnApi] Create Transaction Failure',
  props<{ error: any }>()
);
