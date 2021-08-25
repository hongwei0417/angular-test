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
  @Output() viewTxnInfoEvent = new EventEmitter<string>();
  @Output() editTxnInfoEvent = new EventEmitter<string>();
  @Output() copyTxnInfoEvent = new EventEmitter<string>();
  @Output() executeTxnEvent = new EventEmitter<string>();
  @Output() reloadTxnEvent = new EventEmitter<string>();
  tableCols = tableColumns;

  constructor() {}

  ngOnInit(): void {}

  viewTxnInfo(id: string): void {
    this.viewTxnInfoEvent.emit(id);
  }

  editTxnInfo(id: string): void {
    this.editTxnInfoEvent.emit(id);
  }

  copyTxnInfo(id: string): void {
    this.copyTxnInfoEvent.emit(id);
  }

  executeTxn(id: string): void {
    this.executeTxnEvent.emit(id);
  }

  reloadTxn(id: string): void {
    this.reloadTxnEvent.emit(id);
  }
}
