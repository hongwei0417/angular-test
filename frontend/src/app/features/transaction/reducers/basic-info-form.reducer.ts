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
import { TxnFormPageActions } from '../actions';
import { TxnBasicInfo } from '../models/TxnForm';

export const FeatureKey = 'basicInfoForm';

// export type TxnSettingFormValue = Omit<TxnSetting, 'date'> & {
//   date: Boxed<Date>;
// };

export interface TxnBasicInfoFormValue extends TxnBasicInfo {}

export const txnBasicInfoFormState =
  createFormGroupState<TxnBasicInfoFormValue>(FeatureKey, {
    TransactionName: '',
    APBooking: '',
    ActiveFlag: false,
    date: '',
    time: 0,
    alarmIntervalMin: 10,
  });

export interface State {
  formState: FormGroupState<TxnBasicInfoFormValue>;
  submittedValue: TxnBasicInfoFormValue | undefined;
}

export const validateForm = updateGroup<TxnBasicInfoFormValue>({
  TransactionName: validate(required),
  APBooking: validate(required),
  ActiveFlag: validate(required),
  date: (state, parentState) => {
    return state.value ? state : setValue(state, new Date().toISOString());
  },
});

export const initialState: State = {
  formState: txnBasicInfoFormState,
  submittedValue: undefined,
};

export const rawReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(TxnFormPageActions.clearTxnCreatePageState, (state, action) => {
    return initialState;
  })
);

export const reducer = wrapReducerWithFormStateUpdate(
  rawReducer,
  (state) => state.formState,
  validateForm
);

export const getTxnBasicInfoForm = (state: State) => state.formState;
