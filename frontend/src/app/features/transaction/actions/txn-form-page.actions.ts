import { createAction, props, union } from '@ngrx/store';
import { TxnFormType } from '../models/TxnForm';

export const clearTxnCreatePageState = createAction(
  '[TxnFormPage] Clear TxnCreate Page State'
);

export const loadTxnInfo = createAction(
  '[TxnFormPage] Load specific transaction info',
  props<{ id: string }>()
);

export const loadCreateTxnFormPage = createAction(
  '[TxnFormPage] Initialize create txn form page state'
);

export const loadViewTxnFormPage = createAction(
  '[TxnFormPage] Initialize view txn form page state'
);

export const loadEditTxnFormPage = createAction(
  '[TxnFormPage] Initialize edit txn form page state'
);

export const loadCopyTxnFormPage = createAction(
  '[TxnFormPage] Initialize copy txn form page state'
);
