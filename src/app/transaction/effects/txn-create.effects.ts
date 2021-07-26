import { FormService } from './../services/form.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TxnCreateAction, TxnCreateApiAction } from '../actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TxnCreateEffects {
  constructor(
    private actions$: Actions<
      TxnCreateAction.TxnListActionUnion | TxnCreateApiAction.TxnListActionUnion
    >,
    private formService: FormService
  ) {}

  createTxn = createEffect(() => {
    return this.actions$.pipe(
      ofType(TxnCreateAction.createTxnCreates),
      exhaustMap((action: any) => {
        return this.formService.createTxn(action).pipe(
          map((data: any) =>
            TxnCreateApiAction.createTxnCreateApisSuccess(data)
          ),
          catchError((error) =>
            of(TxnCreateApiAction.createTxnCreateApisFailure({ error }))
          )
        );
      })
    );
  });
}
