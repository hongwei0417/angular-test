import { createAction, props } from '@ngrx/store';

export const addFrequencySetting = createAction(
  '[TxnSetting] Add a frequency setting option'
);

export const removeFrequencySetting = createAction(
  '[TxnSetting] Remove a frequency setting option',
  props<{ id: number }>()
);

export const toggleFqAccordion = createAction(
  '[TxnSetting] Toggle a frequency setting accordion',
  props<{ id: number }>()
);

export const addTxnModule = createAction(
  '[TxnSetting] Add a choose module option',
  props<{ id: number }>()
);

export const removeTxnModule = createAction(
  '[TxnSetting] Remove a choose module option',
  props<{ id: number }>()
);
