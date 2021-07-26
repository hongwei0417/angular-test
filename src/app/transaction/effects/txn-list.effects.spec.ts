import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TxnListEffects } from './txn-list.effects';

describe('TxnListEffects', () => {
  let actions$: Observable<any>;
  let effects: TxnListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TxnListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TxnListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
