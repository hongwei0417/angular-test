import * as fromTxnListApi from './txn-list-api.actions';

describe('loadTxnListApis', () => {
  it('should return an action', () => {
    expect(fromTxnListApi.loadTxnListApis().type).toBe('[TxnListApi] Load TxnListApis');
  });
});
