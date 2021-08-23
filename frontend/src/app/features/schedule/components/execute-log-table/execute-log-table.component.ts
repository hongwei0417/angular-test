import {
  ExecuteLogTableCol,
  ExecuteLogTableRow,
} from './../../models/ExecuteLogTable';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-execute-log-table',
  templateUrl: './execute-log-table.component.html',
  styleUrls: ['./execute-log-table.component.scss'],
})
export class ExecuteLogTableComponent implements OnInit {
  @Input() tableData: ExecuteLogTableRow[] = [];
  tableCols: ExecuteLogTableCol[] = [
    { field: 'retry', header: 'Retry' },
    { field: 'JobId', header: 'Job ID' },
    { field: 'TRANSACTIONID', header: 'Transaction ID' },
    { field: 'TRANSACTIONNAME', header: 'Transaction Name' },
    { field: 'Shift', header: 'Shift' },
    { field: 'PreShift', header: 'PreShift' },
    { field: 'IntervalMin', header: 'Interval Min' },
    { field: 'PassFlag', header: 'Pass Flag' },
    { field: 'OverDueActive', header: 'Over Due Active' },
    { field: 'RuleIndex', header: 'Rule Index' },
    { field: 'APName', header: 'AP Name' },
    { field: 'Retries', header: 'Retries' },
    { field: 'MaxRetryTimes', header: 'Max Retry Times' },
    { field: 'MaxDispatchTimes', header: 'Max Dispatch Times' },
    { field: 'LoaderBufferTime', header: 'Loader Buffer Time' },
    { field: 'BackToBufferTime', header: 'Back To Buffer Time' },
    { field: 'ShiftBackToLoaderTime', header: 'Shift Back To Loader Time' },
    { field: 'BeginTime', header: 'Begin Time' },
    { field: 'EndTime', header: 'End Time' },
    { field: 'CreateTime', header: 'Create Time' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
