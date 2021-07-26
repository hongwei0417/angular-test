import { createAction, props, union } from '@ngrx/store';

export const createTxnCreateApis = createAction(
  '[TxnCreateApi] Create TxnCreateApis'
);

export const createTxnCreateApisSuccess = createAction(
  '[TxnCreateApi] Create TxnCreateApis Success',
  props<{ data: any }>()
);

export const createTxnCreateApisFailure = createAction(
  '[TxnCreateApi] Create TxnCreateApis Failure',
  props<{ error: any }>()
);

const all = union({
  createTxnCreateApis,
  createTxnCreateApisSuccess,
  createTxnCreateApisFailure,
});
export type TxnListActionUnion = typeof all;
