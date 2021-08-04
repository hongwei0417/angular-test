import { Store } from '@ngrx/store';
import { Transaction } from '../models/Transaction';
import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TxnFormService {
  constructor() {}

  createTxn$({ title, content, executeCount }: any): Observable<Transaction> {
    if (title === 'error') {
      return throwError('You create an error txn!');
    } else {
      const txn: Transaction = {
        id: Math.ceil(Math.random() * 100).toFixed(),
        title,
        content,
        executeCount,
        createTime: new Date(),
      };
      return of(txn);
    }
  }
}
