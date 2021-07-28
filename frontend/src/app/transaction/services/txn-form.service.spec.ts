import { TestBed } from '@angular/core/testing';

import { TxnFormService } from './txn-form.service';

describe('FormService', () => {
  let service: TxnFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TxnFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
