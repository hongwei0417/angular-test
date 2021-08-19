import {
  addArrayControl,
  addGroupControl,
  box,
  Boxed,
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
import { JobBasicInfo, JobDllCondition, MailGroup } from './../models/TxnForm';
import { Action, createReducer, on } from '@ngrx/store';
import { required } from 'ngrx-forms/validation';
import { JobSettingFormActions, TxnFormPageActions } from '../actions';

export const FeatureKey = 'jobSettingForm';

export interface JobSettingValue {
  dllCondition: Boxed<JobDllCondition[]>;
  singleJobSetting: SingleJobSettingValue[];
}

export interface SingleJobSettingValue {
  basicInfo: JobBasicInfo;
  dllCondition: Boxed<JobDllCondition[]>;
  mailGroup: MailGroup;
}

export interface State {
  formState: FormGroupState<JobSettingValue>;
  singleJobOptions: number[];
}

export const singleJobSettingState: SingleJobSettingValue = {
  basicInfo: {
    jobName: '',
    maxRetry: '',
    DLLSeq: '',
  },
  dllCondition: box([
    { ConditionID: '', ConditionName: '', ConditionValue: '', Memo: '' },
  ]),
  mailGroup: {
    ownerIT: '',
    mailTo: '',
    ownerCoordinator: '',
    loaderOwner: '',
    mailCC: '',
    mailBCC: '',
    SAPOwner: '',
    MESOwner: '',
  },
};

export const jobSettingFormState = createFormGroupState<JobSettingValue>(
  FeatureKey,
  {
    dllCondition: box([
      {
        ConditionID: '',
        ConditionName: '',
        ConditionValue: '',
        Memo: '',
      },
    ]),
    singleJobSetting: [singleJobSettingState],
  }
);

export const initialState: State = {
  formState: jobSettingFormState,
  singleJobOptions: [0],
};

export const validateForm = updateGroup<JobSettingValue>({
  singleJobSetting: updateArray<SingleJobSettingValue>(
    updateGroup<SingleJobSettingValue>({
      basicInfo: updateGroup<JobBasicInfo>({
        jobName: validate(required),
        maxRetry: validate(required),
        DLLSeq: validate(required),
      }),
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
    })
  ),
});

export const rawReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(TxnFormPageActions.clearTxnCreatePageState, (state, action) => {
    return initialState;
  }),
  on(JobSettingFormActions.addJobSetting, (state, action) => {
    const newID = state.singleJobOptions.length;
    return {
      ...state,
      formState: updateGroup<JobSettingValue>(state.formState, {
        singleJobSetting: (s, p) => {
          return addArrayControl(s, singleJobSettingState);
        },
      }),
      singleJobOptions: [...state.singleJobOptions, newID],
    };
  }),
  on(JobSettingFormActions.removeJobSetting, (state, action) => {
    const removeIndex = state.singleJobOptions.indexOf(action.id);
    return {
      ...state,
      formState: updateGroup<JobSettingValue>(state.formState, {
        singleJobSetting: (s, p) => {
          return removeArrayControl(s, removeIndex);
        },
      }),
      singleJobOptions: state.singleJobOptions.splice(removeIndex, 1),
    };
  })
);

export const reducer = wrapReducerWithFormStateUpdate(
  rawReducer,
  (state: State) => state.formState,
  validateForm
);

export const getFormState = (state: State) => state.formState;
export const getSingleJobOptions = (state: State) => state.singleJobOptions;
