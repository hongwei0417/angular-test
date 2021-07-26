import * as fromTxnCreate from './txn-create.actions';

describe('createTxnCreates', () => {
  it('should return an action', () => {
    expect(fromTxnCreate.createTxnCreates({ title: 'test' }).type).toBe(
      '[TxnCreate] Create TxnCreates'
    );
  });
});
