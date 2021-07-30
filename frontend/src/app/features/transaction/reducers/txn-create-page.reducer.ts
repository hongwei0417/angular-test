import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { TxnApiActions, TxnCreatePageActions } from '../actions';

export const FeatureKey = 'txnCreatePage';

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
  on(TxnCreatePageActions.createTxn, (state, action) => ({
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
    TxnCreatePageActions.clearTxnCreatePageState,
    (state, action) => initialState
  )
);

// export function reducer(
//   state: State | undefined,
//   action:
//     | TxnApiActions.TxnApiActionUnion
//     | TxnCreatePageActions.TxnCreatePageActionUnion
// ) {
//   return featureReducer(state, action);
// }

export const isLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
