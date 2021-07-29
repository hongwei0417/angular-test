import * as fromTxnCreatePage from './txn-create-page.actions';

describe('createTxnCreates', () => {
  it('should return an action', () => {
    expect(
      fromTxnCreatePage.createTxn({
        title: 'test',
        content: 'test',
        executeCount: 0,
      }).type
    ).toBe('[TxnCreate] Create TxnCreates');
  });
});
