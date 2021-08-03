import { generateMockTxn, Transaction } from './../models/Transaction';
import { TxnApiActions, TxnListPageActions } from '../actions';
import * as fromTxnList from './txn-list-page.reducer';
import { fakeData } from '../../../core/services/fake-data.service';

describe('Txn List Page Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = fromTxnList.reducer(fromTxnList.initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('load txn list', () => {
    it('should start loading txn data', () => {
      const action = TxnListPageActions.loadTxnList();
      const result = fromTxnList.reducer(fromTxnList.initialState, action);
      const newState: fromTxnList.State = {
        ...fromTxnList.initialState,
        loading: true,
      };
      expect(result).toEqual(newState);
      expect(result).not.toBe(fromTxnList.initialState);
    });

    it('should get all txn data', () => {
      const newState: fromTxnList.State = {
        ids: ['1', '2', '3'],
        entities: {
          1: fakeData[0],
          2: fakeData[1],
          3: fakeData[2],
        },
        loaded: true,
        loading: false,
        latestId: null,
      };
      const action = TxnApiActions.loadTxnApiSuccess({
        txns: fakeData,
      });
      const result = fromTxnList.reducer(fromTxnList.initialState, action);
      expect(result).toMatchSnapshot();
      expect(result).toEqual(newState);
    });
  });

  describe('create txn', () => {
    it('should get new txn data', () => {
      const payload = generateMockTxn();
      const action = TxnApiActions.createTxnApiSuccess({ txn: payload });
      const result = fromTxnList.reducer(fromTxnList.initialState, action);
      const newState = {
        ...fromTxnList.initialState,
        ids: ['666'],
        entities: {
          666: payload,
        },
      };
      expect(result).toEqual(newState);
    });
  });

  describe('remove txn', () => {
    it('should remove txn from state', () => {
      const removedId = '666';
      const initialState: fromTxnList.State = {
        ...fromTxnList.initialState,
        ids: ['666'],
        entities: {
          666: generateMockTxn(),
        },
      };
      const action = TxnApiActions.deleteTxnApiSuccess({ id: removedId });
      const result = fromTxnList.reducer(initialState, action);
      expect(result).toEqual(fromTxnList.initialState);
    });
  });
});
