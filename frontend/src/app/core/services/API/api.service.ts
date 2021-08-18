import { TxnListTableRow } from './../../../features/transaction/models/TxnListTable';
import { autoschtranms } from './../../../shared/testing/data/txnListTable';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getTxnListData(): Observable<TxnListTableRow[]> {
    return of(autoschtranms);
  }

  createTxnData(): Observable<any> {
    return of();
  }
}
