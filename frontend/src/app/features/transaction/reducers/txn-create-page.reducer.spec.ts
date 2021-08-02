import { TxnApiActions, TxnCreatePageActions } from '../actions';
import { reducer, initialState } from './txn-create-page.reducer';

describe('Txn Create Page Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('create txn', () => {
    it('should update loading status while creating', () => {
      const action = TxnCreatePageActions.createTxn({
        title: 'Jest Testing',
        content: 'This is a test case',
        executeCount: 10
      });
      const result = reducer(initialState, action);
      expect(result.loading).toBe(true);
    });
  });
});
