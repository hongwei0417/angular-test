import {
  AlarmStateTableRow,
  AlarmStateTableCol,
} from './../../models/AlarmStateTable';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm-state-table',
  templateUrl: './alarm-state-table.component.html',
  styleUrls: ['./alarm-state-table.component.scss'],
})
export class AlarmStateTableComponent implements OnInit {
  @Input() tableData: AlarmStateTableRow[] = [];
  tableCols: AlarmStateTableCol[] = [
    { field: 'TransactionId', header: 'Transaction ID' },
    { field: 'TransactionName', header: 'Transaction Name' },
    { field: 'IntervalMin', header: 'Interval Min' },
    { field: 'LastShift', header: 'Last Shift' },
    { field: 'CheckDate', header: 'Check Date' },
    { field: 'AlarmDate', header: 'Alarm Date' },
    { field: 'SendByFlash', header: 'Send By Flash' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
