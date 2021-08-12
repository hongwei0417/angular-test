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
  submittedValue: FrequencySettingFormValue | undefined;
}

export const validateForm = updateGroup<DynamicFormValue>({
  // id: (state, parentState) =>
  //   updateGroup<FrequencySettingFormValue>(state, {
  //     LastTranTime: validate(required),
  //     CronExpression: validate(required),
  //   }),
});

export const initialState: State = {
  formState: DynamicFrequencySettingFormState,
  submittedValue: undefined,
};

// export const formGroupReducerWithUpdate = createFormStateReducerWithUpdate<DynamicFormValue>(validateForm);

// const reducers = combineReducers<State, any>({
//   formState(state = DynamicFrequencySettingFormState, action: Action)
// })

export const rawReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(TxnCreatePageActions.clearTxnCreatePageState, (state, action) => {
    return initialState;
  })
  // on(TxnSettingFormActions.addFrequencySetting, (state, action) => {
  //   return {
  //     ...state,
  //     formState: addGroupControl(
  //       state.formState,
  //       action.name,
  //       FrequencySettingFormState
  //     ),
  //   };
  // })
);

export const reducer = wrapReducerWithFormStateUpdate(
  rawReducer,
  (state) => state.formState,
  validateForm
);

export const getFrequencySettingForm = (state: State) => state.formState;
