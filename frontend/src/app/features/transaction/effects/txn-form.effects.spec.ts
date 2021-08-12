import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TxnFormEffects } from './txn-form.effects';

describe('TxnFormEffects', () => {
  let actions$: Observable<any>;
  let effects: TxnFormEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TxnFormEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TxnFormEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
