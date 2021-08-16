import { createAction, props } from '@ngrx/store';

export const addFrequencySetting = createAction(
  '[TxnSetting] Add a frequency setting'
  // props<{ name: string }>()
);

export const toggleFqAccordion = createAction(
  '[TxnSetting] Toggle a frequency setting accordion',
  props<{ index: number }>()
);
