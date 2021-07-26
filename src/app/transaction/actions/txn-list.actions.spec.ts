import * as fromTxnList from './txn-list.actions';

describe('loadTxnLists', () => {
  it('should return an action', () => {
    expect(fromTxnList.loadTxnLists().type).toBe('[TxnList] Load TxnLists');
  });
});
