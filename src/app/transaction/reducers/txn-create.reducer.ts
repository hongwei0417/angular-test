import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { TxnCreateAction, TxnCreateApiAction } from '../actions';

export const txnCreateFeatureKey = 'txnCreate';

export interface State {
  loading: boolean;
  error: string;
}

export const initialState: State = {
  loading: false,
  error: '',
};

const featureReducer = createReducer(
  initialState,
  on(TxnCreateAction.createTxnCreates, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(TxnCreateApiAction.createTxnCreateApisSuccess, (state, action) => ({
    ...state,
    loading: false,
    error: '',
  })),
  on(TxnCreateApiAction.createTxnCreateApisFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(TxnCreateAction.clearTxnCreateState, (state, action) => initialState)
);

export function reducer(
  state: State | undefined,
  action:
    | TxnCreateAction.TxnListActionUnion
    | TxnCreateApiAction.TxnListActionUnion
) {
  return featureReducer(state, action);
}

export const getError = (state: State) => state.error;
