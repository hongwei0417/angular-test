import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

interface TableData{
  pause?:string;
  resume?:string;
  JobKey:string;
  TransactionId:string;
  TransactionName:string;
  CronExpress:string;
  StartAt:string;
  EndAt:string;
  State:string;
}

const fakeData =[
  {
    CronExpress: "0 20 10 ? * * *",
    EndAt: "2099/01/01",
    JobKey: "0000000020-0",
    StartAt: "2000/01/01",
    State: "Normal",
    TransactionId: "0000000020",
    TransactionName: "Test1081119_1134"
  },
  {
    CronExpress: "0 20/10 0 ? * * *",
    EndAt: "2099-01-01",
    JobKey: "0000000045-0",
    StartAt: "2019-12-24",
    State: "Normal",
    TransactionId: "0000000045",
    TransactionName: "CBDM TEST uTest1090115_1127"
  }
]


@Component({
  selector: 'app-schedule-list-table',
  templateUrl: './schedule-list-table.component.html',
  styleUrls: ['./schedule-list-table.component.scss']
})
export class ScheduleListTableComponent implements OnInit {
  searchForm!: FormGroup;
  tableData$!: Observable<TableData[]>;
  tableCols!: { field: keyof TableData; header: string }[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const setSearchForm = () => {
      this.searchForm = this.fb.group(
        {
          globalFilter: [],
        },
      );
    };
    const setTableColumns = () => {
      this.tableCols = [
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
    };

    const setTableData = () => {
      this.tableData$ = of(fakeData)
    };

    setSearchForm();
    setTableColumns();
    setTableData();
  }

}
