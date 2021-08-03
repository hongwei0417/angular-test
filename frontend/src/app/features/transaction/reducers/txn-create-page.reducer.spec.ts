import { TxnApiActions, TxnCreatePageActions } from '../actions';
import { generateMockTxnForm } from '../models/Transaction';
import { reducer, generateMockState } from './txn-create-page.reducer';

describe('Txn Create Page Reducer', () => {
  const initialState = generateMockState();
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);
      expect(result).toMatchSnapshot();
      expect(result).toBe(initialState);
    });
  });

  describe('create txn', () => {
    it('should update loading status while creating', () => {
      const action = TxnCreatePageActions.createTxn(generateMockTxnForm());
      const result = reducer(initialState, action);
      expect(result.loading).toBe(true);
    });
  });
});
