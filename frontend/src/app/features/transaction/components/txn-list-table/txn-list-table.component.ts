import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TxnListTableCol, TxnListTableRow } from '../../models/TxnListTable';

export const tableColumns: TxnListTableCol[] = [
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
@Component({
  selector: 'app-txn-list-table',
  templateUrl: './txn-list-table.component.html',
  styleUrls: ['./txn-list-table.component.scss'],
})
export class TxnListTableComponent implements OnInit {
  @Input() tableData: TxnListTableRow[] = [];
  tableCols = tableColumns;

  constructor() {}

  ngOnInit(): void {}
}
