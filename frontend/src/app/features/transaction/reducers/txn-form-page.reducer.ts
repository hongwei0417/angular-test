import { createReducer, on } from '@ngrx/store';
import { TxnApiActions, TxnFormPageActions } from '../actions';

export const FeatureKey = 'txnFormPage';

export interface State {
  loading: boolean;
  error: string;
}

export const initialState: State = {
  loading: false,
  error: '',
};

export const reducer = createReducer(
  initialState,
  on(TxnFormPageActions.createTxn, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(TxnApiActions.createTxnApiSuccess, (state, action) => ({
    ...state,
    loading: false,
    error: '',
  })),
  on(TxnApiActions.createTxnApiFail, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(
    TxnFormPageActions.clearTxnCreatePageState,
    (state, action) => initialState
  )
);

export const isLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
