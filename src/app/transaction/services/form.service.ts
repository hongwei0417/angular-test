import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  createTxn({ title }: any) {
    if (title === 'error') {
      return throwError('You create an error txn!');
    } else {
      return of(true);
    }
  }
}
