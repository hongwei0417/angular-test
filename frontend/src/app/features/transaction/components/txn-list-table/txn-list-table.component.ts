import { Transaction } from '../../models/Transaction';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

interface TableData{
  view?:string;
  edit?:string;
  copy?:string;
  execute?:string;
  reload?:string;
  TRANSACTIONID:string;
  TRANSACTIONNAME:string;
  STARTTIME:string;
  endTime?:string;
  ACTIVEFLAG:string;
  AP_BOOKING:string;
}

const autoschtranms =[
  {
    "TRANSACTIONID": "0000000061",
    "TRANSACTIONNAME": "A73A_ForPortalCPHoldDisposition",
    "STARTTIME": "20190814 092000",
    "EXECUTINGFLAG": "N",
    "ACTIVEFLAG": "N",
    "TRANSACTION_TYPE": "1",
    "SHIFTPAGE": "1",
    "AP_BOOKING": "EBAP-HLO999",
    "ISDBLOGFLAG": "N"
  },
  {
    "TRANSACTIONID": "0000000060",
    "TRANSACTIONNAME": "OVT_InvAdjReport_Export_Mail",
    "STARTTIME": "20200415 000000",
    "EXECUTINGFLAG": "N",
    "ACTIVEFLAG": "N",
    "SHIFTPAGE": "1",
    "AP_BOOKING": "EBAP-HLO999",
    "ISDBLOGFLAG": "N",
  },
  {
    "TRANSACTIONID": "0000000059",
    "TRANSACTIONNAME": "OVT_InvAdjusmentReport",
    "STARTTIME": "20200415 000000",
    "EXECUTINGFLAG": "N",
    "ACTIVEFLAG": "N",
    "SHIFTPAGE": "1",
    "AP_BOOKING": "EBAP-HLO999",
    "ISDBLOGFLAG": "N",
  },
]


@Component({
  selector: 'app-txn-list-table',
  templateUrl: './txn-list-table.component.html',
  styleUrls: ['./txn-list-table.component.scss'],
})
export class TxnListTableComponent implements OnInit {
  searchForm!: FormGroup;
  tableData$!: Observable<TableData[]>;
  tableCols!: { field: keyof TableData; header: string }[];


  @Input() txnData: Transaction[] = [];
  @Output() removeEvent = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const setSearchForm = () => {
      this.searchForm = this.fb.group(
        {
          CustId: [],
          globalFilter: [],
        },
      );
    };
    const setTableColumns = () => {
      this.tableCols = [
        { field: 'view', header: 'View' },
        { field: 'edit', header: 'Edit' },
        { field: 'copy', header: 'Copy' },
        { field: 'execute', header: 'Execute' },
        { field: 'reload', header: 'Reload' },
        { field: 'TRANSACTIONID', header: 'Transaction Id' },
        { field: 'TRANSACTIONNAME', header: 'Transaction Name' },
        { field: 'STARTTIME', header: 'Start Time' },
        { field: 'endTime', header: 'End Time' },
        { field: 'ACTIVEFLAG', header: 'Active Flag' },
        { field: 'AP_BOOKING', header: 'AP Booking' },
      ];
    };

    const setTableData = () => {
      this.tableData$ = of(autoschtranms)
    };

    setSearchForm();
    setTableColumns();
    setTableData();
  }



  removeTxn(id: string) {
    this.removeEvent.emit(id);
  }
}
