import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TxnCreateEffects } from './txn-create.effects';

describe('TxnCreateEffects', () => {
  let actions$: Observable<any>;
  let effects: TxnCreateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TxnCreateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TxnCreateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
