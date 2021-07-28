import * as fromTxnList from './txn-list-page.actions';

describe('loadTxnList', () => {
  it('should return an action', () => {
    expect(fromTxnList.loadTxnList().type).toBe('[TxnList] Load TxnLists');
  });
});
