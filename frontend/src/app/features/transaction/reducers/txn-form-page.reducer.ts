import { createReducer, on } from '@ngrx/store';
import { TxnApiActions, TxnFormPageActions } from '../actions';
import { TxnFormType } from '../models/TxnForm';

export const FeatureKey = 'txnFormPage';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: string;
  formType: TxnFormType;
}

export const initialState: State = {
  loading: true,
  loaded: false,
  error: '',
  formType: TxnFormType.CREATE,
};

export const reducer = createReducer(
  initialState,
  on(TxnApiActions.createTxnApiSuccess, (state, action) => ({
    ...state,
    loading: false,
    error: '',
  })),
  on(TxnApiActions.createTxnApiFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(
    TxnFormPageActions.clearTxnCreatePageState,
    (state, action) => initialState
  ),
  on(TxnFormPageActions.loadTxnInfo, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(TxnApiActions.loadTxnApiSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(TxnFormPageActions.loadCreateTxnFormPage, (state, action) => {
    return {
      ...state,
      formType: TxnFormType.CREATE,
    };
  }),
  on(TxnFormPageActions.loadViewTxnFormPage, (state, action) => {
    return {
      ...state,
      formType: TxnFormType.VIEW,
    };
  }),
  on(TxnFormPageActions.loadEditTxnFormPage, (state, action) => {
    return {
      ...state,
      formType: TxnFormType.EDIT,
    };
  }),
  on(TxnFormPageActions.loadCopyTxnFormPage, (state, action) => {
    return {
      ...state,
      formType: TxnFormType.COPY,
    };
  })
);

export const isLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const getFormType = (state: State) => state.formType;
