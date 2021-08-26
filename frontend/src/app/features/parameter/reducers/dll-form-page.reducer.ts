import {
  FormGroupState,
  createFormGroupState,
  updateGroup,
  validate,
  onNgrxForms,
  wrapReducerWithFormStateUpdate,
} from 'ngrx-forms';
import { Action, createReducer, on } from '@ngrx/store';
import { required } from 'ngrx-forms/validation';

export const FeatureKey = 'dllFormPage';

export interface DllFormValue {
  DLLDescription: string;
  DLLPath: string;
  DLLName: string;
  NameSpace: string;
  ClassName: string;
}

export interface State {
  formState: FormGroupState<DllFormValue>;
  loading: boolean;
  loaded: boolean;
}

export const dllFormState = createFormGroupState<DllFormValue>(FeatureKey, {
  DLLDescription: '',
  DLLPath: '',
  DLLName: '',
  NameSpace: '',
  ClassName: '',
});

export const validateForm = updateGroup<DllFormValue>({
  DLLDescription: validate(required),
  DLLPath: validate(required),
  DLLName: validate(required),
  NameSpace: validate(required),
  ClassName: validate(required),
});

export const initialState: State = {
  formState: dllFormState,
  loading: true,
  loaded: false,
};

export const rawReducer = createReducer(initialState, onNgrxForms());

export const reducer = wrapReducerWithFormStateUpdate(
  rawReducer,
  (state) => state.formState,
  validateForm
);

// selectors
export const getFormState = (state: State) => state.formState;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
