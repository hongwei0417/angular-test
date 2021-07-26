import * as fromTxnCreateApi from './txn-create-api.actions';

describe('createTxnCreateApis', () => {
  it('should return an action', () => {
    expect(fromTxnCreateApi.createTxnCreateApis().type).toBe('[TxnCreateApi] Create TxnCreateApis');
  });
});
