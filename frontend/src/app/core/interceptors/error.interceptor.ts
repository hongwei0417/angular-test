import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpActions } from '../actions';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private store$: Store) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            break;
          case 404:
            break;
          case 500:
            break;
          case 501:
            break;
          case 503:
            break;
          default:
            break;
        }
        this.store$.dispatch(
          HttpActions.showHttpError({ message: error.message })
        );
        return throwError(error);
      })
    );
  }
}
