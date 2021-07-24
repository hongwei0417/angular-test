import { createAction, props } from '@ngrx/store';

export const loadTransactionss = createAction(
  '[Transactions] Load Transactionss'
);

export const loadTransactionssSuccess = createAction(
  '[Transactions] Load Transactionss Success',
  props<{ data: any }>()
);

export const loadTransactionssFailure = createAction(
  '[Transactions] Load Transactionss Failure',
  props<{ error: any }>()
);
