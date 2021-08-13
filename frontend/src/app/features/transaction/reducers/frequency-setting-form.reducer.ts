import {
  createFormGroupState,
  FormGroupState,
  updateGroup,
  validate,
  onNgrxForms,
  wrapReducerWithFormStateUpdate,
  updateRecursive,
  setUserDefinedProperty,
  addGroupControl,
  createFormStateReducerWithUpdate,
  formGroupReducer,
  formStateReducer,
} from 'ngrx-forms';
import { FrequencySetting } from './../models/TxnForm';
import { Action, combineReducers, createReducer, on } from '@ngrx/store';
import { required } from 'ngrx-forms/validation';
import {
  TxnApiActions,
  TxnCreatePageActions,
  TxnSettingFormActions,
} from '../actions';
import { randomBytes, randomInt } from 'crypto';

export const FeatureKey = 'frequencySettingForm';

export interface FQSettingValue extends FrequencySetting {}

export interface FQCollectionValue {
  [id: number]: FQSettingValue;
}

export const FQSettingFormState: FQSettingValue = {
  LastTranTime: '',
  CronExpression: '',
  TimeZone: '',
  RetryTimes: 0,
  LoaderBufferTime: 0,
  BackToBufferTime: 0,
  ShiftBackToLoaderTime: 0,
  StartAt: '',
  EndAt: '',
  SkipOverDue: false,
  SkipAllOverDue: false,
};

export const FQCollectionFormState = createFormGroupState<FQCollectionValue>(
  'frequencySettingForm',
  {
    0: FQSettingFormState,
  }
);

export interface State {
  formState: FormGroupState<FQCollectionValue>;
  options: number[];
  submittedValue: FQSettingValue | undefined;
}

export const createValidateForm = (newOptions: number[]) => {
  const nestedValidateGroups = {} as any;
  newOptions.forEach((i) => {
    nestedValidateGroups[i] = updateGroup<FQSettingValue>({
      LastTranTime: validate(required),
      CronExpression: validate(required),
    });
  });
  return updateGroup<FQCollectionValue>(nestedValidateGroups);
};

export const initialState: State = {
  formState: FQCollectionFormState,
  options: [0],
  submittedValue: undefined,
};

export const form = createFormStateReducerWithUpdate<FQCollectionValue>(
  createValidateForm([0])
);

export const rawReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(TxnCreatePageActions.clearTxnCreatePageState, (state, action) => {
    return initialState;
  }),
  on(TxnSettingFormActions.addFrequencySetting, (state, action) => {
    const newID = state.options[state.options.length - 1] + 1;
    return {
      ...state,
      options: [...state.options, newID],
      formState: addGroupControl(state.formState, newID, FQSettingFormState),
    };
  })
);

export const reducer = wrapReducerWithFormStateUpdate(
  rawReducer,
  (state) => state.formState,
  (formState: FormGroupState<FQCollectionValue>, state) => {
    return createValidateForm(state.options)(formState);
  }
);

export const getFormState = (state: State) => state.formState;
export const getOptions = (state: State) => state.options;
