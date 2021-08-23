import { Store, select } from '@ngrx/store';
import { ScheduleTableRow } from './../../models/ScheduleTable';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ScheduleTableCol } from '../../models/ScheduleTable';
import * as fromSchedule from '../../reducers';

@Component({
  selector: 'app-schedule-list-table',
  templateUrl: './schedule-list-table.component.html',
  styleUrls: ['./schedule-list-table.component.scss'],
})
export class ScheduleListTableComponent implements OnInit {
  @Input() scheduleData: ScheduleTableRow[] = [];
  tableCols: ScheduleTableCol[] = [
    { field: 'pause', header: 'Pause' },
    { field: 'resume', header: 'Resume' },
    { field: 'JobKey', header: 'Job Key' },
    { field: 'TransactionId', header: 'Transaction ID' },
    { field: 'TransactionName', header: 'Transaction Name' },
    { field: 'CronExpress', header: 'Cron Express' },
    { field: 'StartAt', header: 'Start At' },
    { field: 'EndAt', header: 'End At' },
    { field: 'State', header: 'State' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
