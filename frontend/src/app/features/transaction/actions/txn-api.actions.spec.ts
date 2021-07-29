import * as fromTxnApi from './txn-api.actions';

describe('create txn api', () => {
  it('should return an action', () => {
    expect(fromTxnApi.createTxnApiFail({ error: '' }).type).toBe(
      '[TxnApi] Load TxnApis'
    );
  });
});
