import {
  FormGroupState,
  FormArrayState,
  createFormArrayState,
  updateArray,
  updateGroup,
  validate,
  wrapReducerWithFormStateUpdate,
  onNgrxForms,
} from 'ngrx-forms';
import { Action, createReducer, on } from '@ngrx/store';
import { MailGroup } from '../models/TxnForm';
import { required } from 'ngrx-forms/validation';

export interface MailGroupValue extends MailGroup {}

export interface State {
  formState: FormArrayState<MailGroupValue>;
}

export const FeatureKey = 'mailGroupForm';

export const mailGroupForm = {
  ownerIT: '',
  mailTo: '',
  ownerCoordinator: '',
  loaderOwner: '',
  mailCC: '',
  mailBCC: '',
  SAPOwner: '',
  MESOwner: '',
};

export const mailGroupFormState = createFormArrayState<MailGroupValue>(
  FeatureKey,
  [mailGroupForm, mailGroupForm]
);

export const validateForm = updateArray<MailGroupValue>(
  updateGroup<MailGroupValue>({
    ownerIT: validate(required),
    mailTo: validate(required),
    ownerCoordinator: validate(required),
    loaderOwner: validate(required),
    mailCC: validate(required),
    mailBCC: validate(required),
    SAPOwner: validate(required),
    MESOwner: validate(required),
  })
);

export const initialState: State = {
  formState: mailGroupFormState,
};

export const rawReducer = createReducer(initialState, onNgrxForms());

export const reducer = wrapReducerWithFormStateUpdate(
  rawReducer,
  (state) => state.formState,
  validateForm
);

export const getFormState = (state: State) => state.formState;
