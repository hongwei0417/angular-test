import { Transaction } from '../../models/Transaction';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromTxn from '../../reducers';
import { TxnListPageActions } from '../../actions';


// interface TableData{
//   view?:string;
//   edit?:string;
//   copy?:string;
//   execute?:string;
//   reload?:string;
//   TRANSACTIONID:string;
//   TRANSACTIONNAME:string;
//   STARTTIME:string;
//   endTime?:string;
//   ACTIVEFLAG:string;
//   AP_BOOKING:string;
// }

// const autoschtranms =[
//   {
//     "TRANSACTIONID": "0000000061",
//     "TRANSACTIONNAME": "A73A_ForPortalCPHoldDisposition",
//     "STARTTIME": "20190814 092000",
//     "EXECUTINGFLAG": "N",
//     "ACTIVEFLAG": "N",
//     "TRANSACTION_TYPE": "1",
//     "SHIFTPAGE": "1",
//     "AP_BOOKING": "EBAP-HLO999",
//     "ISDBLOGFLAG": "N"
//   },
//   {
//     "TRANSACTIONID": "0000000060",
//     "TRANSACTIONNAME": "OVT_InvAdjReport_Export_Mail",
//     "STARTTIME": "20200415 000000",
//     "EXECUTINGFLAG": "N",
//     "ACTIVEFLAG": "N",
//     "SHIFTPAGE": "1",
//     "AP_BOOKING": "EBAP-HLO999",
//     "ISDBLOGFLAG": "N",
//   },
//   {
//     "TRANSACTIONID": "0000000059",
//     "TRANSACTIONNAME": "OVT_InvAdjusmentReport",
//     "STARTTIME": "20200415 000000",
//     "EXECUTINGFLAG": "N",
//     "ACTIVEFLAG": "N",
//     "SHIFTPAGE": "1",
//     "AP_BOOKING": "EBAP-HLO999",
//     "ISDBLOGFLAG": "N",
//   },
// ]



@Component({
  selector: 'app-txn-list-page',
  templateUrl: './txn-list-page.component.html',
  styleUrls: ['./txn-list-page.component.scss'],
})
export class TxnListPageComponent implements OnInit {
  txnData$!: Observable<Transaction[]>;


  constructor(private store$: Store<fromTxn.State>) {}

  ngOnInit(): void {
    // this.txnData$ = this.store.select(fromTxn.getAllTxns); //style1
    this.txnData$ = this.store$.pipe(select(fromTxn.getAllTxns)); //style2

  }

  loadTxnData() {
    this.store$.dispatch(TxnListPageActions.loadTxnList());
  }

  onRemoveTxn(id: string) {
    this.store$.dispatch(TxnListPageActions.deleteTxn({ id }));
  }
}
