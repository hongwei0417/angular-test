import { Store } from '@ngrx/store';
import { ITransaction } from '../models/Transaction';
import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TxnFormService {
  constructor(private store: Store) {}

  createTxn({ title, content, executeCount }: any): Observable<ITransaction> {
    if (title === 'error') {
      return throwError('You create an error txn!');
    } else {
      const txn: ITransaction = {
        id: Math.ceil(Math.random() * 100).toFixed(),
        title: title,
        content: content,
        executeCount: executeCount,
        createTime: new Date(),
      };
      return of(txn);
    }
  }
}
