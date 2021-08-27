import { MessageService } from 'primeng/api';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpActions } from '../actions';

@Injectable()
export class HttpEffects {
  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}

  showHttpError$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(HttpActions.showHttpError),
        tap(({ message }) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Http Response Error',
            detail: message,
          });
        })
      );
    },
    { dispatch: false }
  );
}
