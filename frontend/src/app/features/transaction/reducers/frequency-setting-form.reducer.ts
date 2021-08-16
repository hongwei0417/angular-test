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
  setValue,
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

export interface FqSettingValue extends FrequencySetting {}

export interface FqCollectionValue {
  [id: number]: FqSettingValue;
}
export interface State {
  formState: FormGroupState<FqCollectionValue>;
  options: number[];
  showAccordions: boolean[];
  submittedValue: FqSettingValue | undefined;
}

export const FqSettingFormState: FqSettingValue = {
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

export const FQCollectionFormState = createFormGroupState<FqCollectionValue>(
  'frequencySettingForm',
  {
    0: FqSettingFormState,
  }
);

export const createValidateForm = (newOptions: number[]) => {
  const nestedValidateGroups = {} as any;
  newOptions.forEach((i) => {
    nestedValidateGroups[i] = updateGroup<FqSettingValue>({
      LastTranTime: (state, parentState) => {
        const s = validate(state, required);
        return s.value ? s : setValue(s, new Date().toISOString());
      },
      CronExpression: validate(required),
      StartAt: (state, parentState) => {
        return state.value ? state : setValue(state, new Date().toISOString());
      },
      EndAt: (state, parentState) => {
        return state.value ? state : setValue(state, new Date().toISOString());
      },
    });
  });
  return updateGroup<FqCollectionValue>(nestedValidateGroups);
};

export const initialState: State = {
  formState: FQCollectionFormState,
  options: [0],
  showAccordions: [false],
  submittedValue: undefined,
};

export const form = createFormStateReducerWithUpdate<FqCollectionValue>(
  createValidateForm([0])
);

export const rawReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(TxnCreatePageActions.clearTxnCreatePageState, (state, action) => {
    return initialState;
  }),
  on(TxnSettingFormActions.addFrequencySetting, (state, action) => {
    console.log(state);
    const newID = state.options[state.options.length - 1] + 1;
    const newAccordion = false;
    return {
      ...state,
      options: [...state.options, newID],
      showAccordions: [...state.showAccordions, newAccordion],
      formState: addGroupControl(state.formState, newID, FqSettingFormState),
    };
  }),
  on(TxnSettingFormActions.toggleFqAccordion, (state, action) => {
    const newAccordions = state.showAccordions.map((status, i) => {
      return i === action.index ? !status : status;
    });
    return {
      ...state,
      showAccordions: newAccordions,
    };
  })
);

export const reducer = wrapReducerWithFormStateUpdate(
  rawReducer,
  (state) => state.formState,
  (formState: FormGroupState<FqCollectionValue>, state) => {
    return createValidateForm(state.options)(formState);
  }
);

export const getFormState = (state: State) => state.formState;
export const getOptions = (state: State) => state.options;
export const getShowAccordions = (state: State) => state.showAccordions;
