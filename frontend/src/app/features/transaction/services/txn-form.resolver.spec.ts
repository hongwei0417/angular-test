import { TestBed } from '@angular/core/testing';

import { TxnFormResolver } from './txn-form.resolver';

describe('TxnFormResolver', () => {
  let resolver: TxnFormResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TxnFormResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
