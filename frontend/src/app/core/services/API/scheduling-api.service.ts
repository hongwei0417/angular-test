import { HttpHelperService } from '../httpHelper/http-helper.service';
import { environment } from '../../../../environments/environment.prod';
import {
  TxnListTableData,
  TxnListTableRow,
} from '../../../features/transaction/models/TxnListTable';
import { allTxnData } from '../../../features/transaction/testing/data/txn-list--table';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SchedulingApiService {
  host = environment.services.b2b_backend_api.host;
  type = environment.services.b2b_backend_api.types.scheduling;
  baseAPI = `${this.host}/${this.type}`;

  constructor(private httpHelperService: HttpHelperService) {}

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

  getAllSchedules(): Observable<any> {
    return this.httpHelperService.get(this.baseAPI, 'schedule/all-sch-job');
  }
}
