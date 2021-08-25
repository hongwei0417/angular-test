import { createAction, props, union } from '@ngrx/store';
import { TxnFormType } from '../models/TxnForm';
import { TxnListTableData, TxnListTableRow } from '../models/TxnListTable';

export const loadAllTxnApiSuccess = createAction(
  '[TxnApi] Load Transaction Success',
  props<{ txnData: TxnListTableRow[] }>()
);

export const loadAllTxnApiFailure = createAction(
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

export const createTxnApiFailure = createAction(
  '[TxnApi] Create Transaction Failure',
  props<{ error: any }>()
);

export const loadTxnApiSuccess = createAction(
  '[TxnApi] Load a transaction data success',
  props<{ txnInfo: any }>()
);

export const loadTxnApiFailure = createAction(
  '[TxnApi] Load a transaction data fail',
  props<{ error: any }>()
);
