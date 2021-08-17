import {
  addArrayControl,
  createFormArrayState,
  createFormGroupState,
  FormArrayState,
  FormGroupState,
  onNgrxForms,
  removeArrayControl,
  updateArray,
  updateGroup,
  validate,
  wrapReducerWithFormStateUpdate,
} from 'ngrx-forms';
import { Action, createReducer, on } from '@ngrx/store';
import { ChooseModule } from '../models/TxnForm';
import { required } from 'ngrx-forms/validation';
import { TxnFormPageActions, TxnSettingFormActions } from '../actions';

export interface ModuleValue extends ChooseModule {}

export interface State {
  formState: FormArrayState<ModuleValue>;
  options: number[];
}

export const FeatureKey = 'moduleForm';

export const moduleForm = { moduleName: '', issue: true };

export const moduleFormState = createFormArrayState<ModuleValue>(FeatureKey, [
  moduleForm,
]);

export const initialState: State = {
  formState: moduleFormState,
  options: [0],
};

export const validateForm = updateArray<ModuleValue>(
  updateGroup<ModuleValue>({
    moduleName: validate(required),
    issue: validate(required),
  })
);

// reducers
export const rawReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(TxnFormPageActions.clearTxnCreatePageState, (state, action) => {
    return initialState;
  }),
  on(TxnSettingFormActions.addChooseModule, (state, action) => {
    const options = [...state.options];
    options.splice(
      state.options.indexOf(action.id) + 1,
      0,
      state.options.length
    );
    const formState =
      state.options.indexOf(action.id) < state.options.length - 1
        ? addArrayControl(
            state.formState,
            moduleForm,
            state.options.indexOf(action.id) + 1
          )
        : addArrayControl(state.formState, moduleForm);
    return {
      ...state,
      formState,
      options,
    };
  }),
  on(TxnSettingFormActions.removeChooseModule, (state, action) => {
    const options = [...state.options];
    options.splice(state.options.indexOf(action.id), 1);
    return {
      ...state,
      formState: removeArrayControl(
        state.formState,
        state.options.indexOf(action.id)
      ),
      options,
    };
  })
);

export const reducer = wrapReducerWithFormStateUpdate(
  rawReducer,
  (state) => state.formState,
  validateForm
);

export const getFormState = (state: State) => state.formState;
export const getOptions = (state: State) => state.options;
