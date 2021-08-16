import { Action, createReducer, on } from '@ngrx/store';
import {
  createFormGroupState,
  FormGroupState,
  onNgrxForms,
  onNgrxFormsAction,
  updateGroup,
  validate,
  wrapReducerWithFormStateUpdate,
  createFormStateReducerWithUpdate,
  Boxed,
  box,
  setValue,
} from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
import { TxnCreatePageActions } from '../actions';
import { TxnSetting } from '../models/TxnForm';

export const FeatureKey = 'txnSettingForm';

// export type TxnSettingFormValue = Omit<TxnSetting, 'date'> & {
//   date: Boxed<Date>;
// };

export interface TxnSettingFormValue extends TxnSetting {}

export const txnSettingFormState = createFormGroupState<TxnSettingFormValue>(
  'txnSettingForm',
  {
    TransactionName: '',
    APBooking: '',
    ActiveFlag: false,
    date: '',
    time: 0,
    alarmIntervalMin: 10,
  }
);

export interface State {
  formState: FormGroupState<TxnSettingFormValue>;
  submittedValue: TxnSettingFormValue | undefined;
}

export const validateForm = updateGroup<TxnSettingFormValue>({
  TransactionName: validate(required),
  APBooking: validate(required),
  ActiveFlag: validate(required),
  date: (state, parentState) => {
    return state.value ? state : setValue(state, new Date().toISOString());
  },
});

export const initialState: State = {
  formState: txnSettingFormState,
  submittedValue: undefined,
};

export const rawReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(TxnCreatePageActions.clearTxnCreatePageState, (state, action) => {
    return initialState;
  })
);

export const reducer = wrapReducerWithFormStateUpdate(
  rawReducer,
  (state) => state.formState,
  validateForm
);

export const getTxnSettingForm = (state: State) => state.formState;
