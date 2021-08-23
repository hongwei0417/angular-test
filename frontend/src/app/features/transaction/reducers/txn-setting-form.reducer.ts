import {
  addArrayControl,
  createFormGroupState,
  FormGroupState,
  onNgrxForms,
  removeArrayControl,
  setValue,
  updateArray,
  updateGroup,
  validate,
  wrapReducerWithFormStateUpdate,
} from 'ngrx-forms';
import { MailGroup, TxnModule, FrequencySetting } from './../models/TxnForm';
import { Action, createReducer, on } from '@ngrx/store';
import { TxnBasicInfo } from '../models/TxnForm';
import { required } from 'ngrx-forms/validation';
import { TxnSettingFormActions } from '../actions';

export const FeatureKey = 'txnSettingForm';

export interface TxnSettingFormValue {
  basicInfo: TxnBasicInfo;
  frequencySettings: FrequencySetting[];
  modules: TxnModule[];
  mailGroup: MailGroup;
}

export interface State {
  formState: FormGroupState<TxnSettingFormValue>;
  fqSettingOptions: number[];
  fqShowAccordions: boolean[];
  moduleOptions: number[];
}

export const basicInfoFormState: TxnBasicInfo = {
  TransactionName: '',
  APBooking: '',
  ActiveFlag: false,
  date: '',
  time: 0,
  alarmIntervalMin: 10,
};

export const fqSettingFormState: FrequencySetting = {
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

export const moduleFormState: TxnModule = { moduleName: '', issue: true };

export const mailGroupFormState: MailGroup = {
  ownerIT: '',
  mailTo: '',
  ownerCoordinator: '',
  loaderOwner: '',
  mailCC: '',
  mailBCC: '',
  SAPOwner: '',
  MESOwner: '',
};

export const txnSettingFormState = createFormGroupState<TxnSettingFormValue>(
  FeatureKey,
  {
    basicInfo: basicInfoFormState,
    frequencySettings: [fqSettingFormState],
    modules: [moduleFormState],
    mailGroup: mailGroupFormState,
  }
);

export const initialState: State = {
  formState: txnSettingFormState,
  fqSettingOptions: [0],
  fqShowAccordions: [false],
  moduleOptions: [0],
};

export const validateForm = updateGroup<TxnSettingFormValue>({
  basicInfo: updateGroup<TxnBasicInfo>({
    TransactionName: validate(required),
    APBooking: validate(required),
    ActiveFlag: validate(required),
    date: (state, parentState) => {
      return state.value ? state : setValue(state, new Date().toISOString());
    },
  }),
  frequencySettings: updateArray<FrequencySetting>(
    updateGroup<FrequencySetting>({
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
    })
  ),
  modules: updateArray<TxnModule>(
    updateGroup<TxnModule>({
      moduleName: validate(required),
      issue: validate(required),
    })
  ),
  mailGroup: updateGroup<MailGroup>({
    ownerIT: validate(required),
    mailTo: validate(required),
    ownerCoordinator: validate(required),
    loaderOwner: validate(required),
    mailCC: validate(required),
    mailBCC: validate(required),
    SAPOwner: validate(required),
    MESOwner: validate(required),
  }),
});

export const rawReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(TxnSettingFormActions.addFrequencySetting, (state, action) => {
    return {
      ...state,
      formState: updateGroup<TxnSettingFormValue>(state.formState, {
        frequencySettings: (s, p) => addArrayControl(s, fqSettingFormState),
      }),
      fqSettingOptions: [
        ...state.fqSettingOptions,
        state.fqSettingOptions.length,
      ],
      fqShowAccordions: [...state.fqShowAccordions, false],
    };
  }),
  on(TxnSettingFormActions.toggleFqAccordion, (state, action) => {
    return {
      ...state,
      fqShowAccordions: state.fqShowAccordions.map((x, i) =>
        i === action.id ? !x : x
      ),
    };
  }),
  on(TxnSettingFormActions.addTxnModule, (state, action) => {
    const moduleOptions = [...state.moduleOptions];
    const index = state.moduleOptions.indexOf(action.id);
    moduleOptions.splice(index, 0, state.moduleOptions.length + 1);
    return {
      ...state,
      formState: updateGroup<TxnSettingFormValue>(state.formState, {
        modules: (s, ps) => {
          if (index + 1 < state.moduleOptions.length) {
            return addArrayControl<TxnModule>(s, moduleFormState, index + 1);
          } else {
            return addArrayControl<TxnModule>(s, moduleFormState);
          }
        },
      }),
      moduleOptions,
    };
  }),
  on(TxnSettingFormActions.removeTxnModule, (state, action) => {
    const moduleOptions = [...state.moduleOptions];
    const index = state.moduleOptions.indexOf(action.id);
    moduleOptions.splice(index, 1);
    return {
      ...state,
      formState: updateGroup<TxnSettingFormValue>(state.formState, {
        modules: (s, ps) => {
          return removeArrayControl<TxnModule>(s, index);
        },
      }),
      moduleOptions,
    };
  })
);

export const reducer = wrapReducerWithFormStateUpdate(
  rawReducer,
  (state: State) => state.formState,
  validateForm
);

export const getFormState = (state: State) => state.formState;
export const getFqOptions = (state: State) => state.fqSettingOptions;
export const getModuleOptions = (state: State) => state.moduleOptions;
export const getShowAccordions = (state: State) => state.fqShowAccordions;