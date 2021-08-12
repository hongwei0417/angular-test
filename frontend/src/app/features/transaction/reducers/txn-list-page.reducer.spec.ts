import { autoschtranms } from './../../../shared/testing/data/txnListTableData';
import { TxnApiActions, TxnListPageActions } from '../actions';
import * as fromTxnList from './txn-list-page.reducer';

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
      const newState = { ...getEntityState(), loaded: true };
      const action = TxnApiActions.loadTxnApiSuccess({
        txnData: autoschtranms,
      });
      const result = fromTxnList.reducer(fromTxnList.initialState, action);
      expect(result).toMatchSnapshot();
      expect(result).toEqual(newState);
    });
  });

  // describe('create txn', () => {
  //   it('should get new txn data', () => {
  //     const payload = generateMockTxn();
  //     const action = TxnApiActions.createTxnApiSuccess({ txn: payload });
  //     const result = fromTxnList.reducer(fromTxnList.initialState, action);
  //     const newState = {
  //       ...fromTxnList.initialState,
  //       ids: ['666'],
  //       entities: {
  //         666: payload,
  //       },
  //     };
  //     expect(result).toEqual(newState);
  //   });
  // });

  // describe('remove txn', () => {
  //   it('should remove txn from state', () => {
  //     const removedId = '666';
  //     const initialState: fromTxnList.State = {
  //       ...fromTxnList.initialState,
  //       ids: ['666'],
  //       entities: {
  //         666: generateMockTxn(),
  //       },
  //     };
  //     const action = TxnApiActions.deleteTxnApiSuccess({ id: removedId });
  //     const result = fromTxnList.reducer(initialState, action);
  //     expect(result).toEqual(fromTxnList.initialState);
  //   });
  // });

  const getEntityState = () => {
    const ids = autoschtranms.map((i) => i.TRANSACTIONID);
    const entities = {} as any;
    ids.forEach((i, n) => (entities[i] = autoschtranms[n]));
    const state: fromTxnList.State = {
      ...fromTxnList.initialState,
      ids,
      entities,
    };
    return state;
  };
});
