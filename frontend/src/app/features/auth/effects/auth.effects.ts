import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { AuthApiActions, LoginPageActions } from '../actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginPageActions.login),
      map((action) =>
        AuthApiActions.loginAuthApisSuccess({
          user: {
            name: 'Kevin',
          },
        })
      )
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthApiActions.loginAuthApisSuccess),
        tap(() => this.router.navigate(['/transaction/list']))
      );
    },
    { dispatch: false }
  );

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthApiActions.loginRedirect),
        tap((authed) => {
          console.log(123);
          this.router.navigate(['/login']);
        })
      );
    },
    { dispatch: false }
  );
}
