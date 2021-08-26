import {
  TxnListTableData,
  TxnListTableRow,
} from './../../../features/transaction/models/TxnListTable';
import { allTxnData } from '../../../features/transaction/testing/data/txn-list--table';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getAllTxn(): Observable<TxnListTableRow[]> {
    return of(allTxnData);
  }

  getTxnById(id: string): Observable<TxnListTableData> {
    return of(allTxnData).pipe(
      switchMap((v) => {
        const data = v.find((x) => x.TRANSACTIONID === id) as TxnListTableData;
        return data ? of(data) : throwError('NO_MATCH_TXN_ID');
      })
    );
  }
}
