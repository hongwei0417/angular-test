import { FormsModule } from '@angular/forms';
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
} from 'ngrx-forms';
import { FrequencySetting } from './../models/TxnForm';
import { Action, combineReducers, createReducer, on } from '@ngrx/store';
import { required } from 'ngrx-forms/validation';
import {
  TxnApiActions,
  TxnCreatePageActions,
  TxnSettingFormActions,
} from '../actions';
import * as fromTxn from '../reducers';
import { AnyNsRecord } from 'dns';

export const FeatureKey = 'frequencySettingForm';

export interface FrequencySettingFormValue extends FrequencySetting {}

export interface DynamicFormValue {
  [id: string]: FrequencySettingFormValue;
}

export const FrequencySettingFormState: FrequencySettingFormValue = {
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

export const DynamicFrequencySettingFormState =
  createFormGroupState<DynamicFormValue>('frequencySettingForm', {
    0: FrequencySettingFormState,
  });

export interface State {
  formState: FormGroupState<DynamicFormValue>;
  options: string[];
  // submittedValue: FrequencySettingFormValue | undefined;
}

export const createValidateForm = (newOptions: string[]) => {
  const nestedValidateGroups = {} as any;
  newOptions.forEach((i) => {
    nestedValidateGroups[i] = updateGroup<FrequencySettingFormValue>({
      LastTranTime: validate(required),
      CronExpression: validate(required),
    });
  });
  return updateGroup<DynamicFormValue>(nestedValidateGroups);
};

// export const validateForm = updateGroup<DynamicFormValue>({
//   formState: (state, parentState) =>
//     updateGroup<FrequencySettingFormValue>(state, {
//       LastTranTime: validate(required),
//       CronExpression: validate(required),
//     }),
// });

export const initialState: State = {
  formState: createValidateForm(['0'])(DynamicFrequencySettingFormState),
  options: ['0'],
  // submittedValue: undefined,
};

export const form = createFormStateReducerWithUpdate<DynamicFormValue>(
  createValidateForm(['0'])
);

// const reducers = combineReducers<State, any>({
//   // tslint:disable-next-line: typedef
//   formState(s = DynamicFrequencySettingFormState, a: Action) {
//     return createValidateForm(['0'])(formGroupReducer(s, a));
//   },
//   // tslint:disable-next-line: typedef
//   options(s: string[] = [], a) {
//     return s;
//   },
// });

// tslint:disable-next-line: typedef
// export function reducer(s: State, a: Action) {
//   return reducers(s, a);
// }

export const reducer = createReducer(
  initialState,
  onNgrxForms(),
  on(TxnCreatePageActions.clearTxnCreatePageState, (state, action) => {
    return initialState;
  }),
  on(TxnSettingFormActions.addFrequencySetting, (state, action) => {
    const newOptions = [...state.options, action.name];
    const formGroupState = addGroupControl(
      state.formState,
      action.name,
      FrequencySettingFormState
    );
    const formState = createValidateForm(newOptions)(formGroupState);
    return {
      ...state,
      options: [...state.options, action.name],
      formState,
    };
  })
);

// export function reducer(state: State | undefined, action: Action) {
//   return rawReducer(state, action);
// }

// export const reducer = wrapReducerWithFormStateUpdate(
//   rawReducer,
//   (state) => state.formState,
//   createValidateForm(['0'])
// );

export const getFrequencySettingForm = (state: State) => state.formState;
export const getFrequencySettingOptions = (state: State) => state.options;
