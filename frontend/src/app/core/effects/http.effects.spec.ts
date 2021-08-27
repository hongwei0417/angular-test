import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { HttpEffects } from './http.effects';

describe('HttpEffects', () => {
  let actions$: Observable<any>;
  let effects: HttpEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(HttpEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
