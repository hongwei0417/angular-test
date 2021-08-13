import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

interface TableData{
  TransactionId:string;
  TransactionName:string;
  IntervalMin:string;
  LastShift:string;
  CheckDate:string;
  AlarmDate:string;
  SendByFlash:string;
}

const fakeData =[
  {
    TransactionId: "0000000020",
    TransactionName: "",
    IntervalMin: "70",
    LastShift: "20140612 030300",
    CheckDate: "2019/11/25 09:15:11",
    AlarmDate: "",
    SendByFlash: "N",
  },
  {
    TransactionId: "0000000020",
    TransactionName: "",
    IntervalMin: "70",
    LastShift: "20140612 030300",
    CheckDate: "2019/11/25 09:15:11",
    AlarmDate: "",
    SendByFlash: "N",
  },
  {
    TransactionId: "0000000020",
    TransactionName: "",
    IntervalMin: "70",
    LastShift: "20140612 030300",
    CheckDate: "2019/11/25 09:15:11",
    AlarmDate: "",
    SendByFlash: "N",
  }
]

@Component({
  selector: 'app-alarm-state-table',
  templateUrl: './alarm-state-table.component.html',
  styleUrls: ['./alarm-state-table.component.scss']
})
export class AlarmStateTableComponent implements OnInit {
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
        { field: 'TransactionId', header: 'Transaction ID' },
        { field: 'TransactionName', header: 'Transaction Name' },
        { field: 'IntervalMin', header: 'Interval Min' },
        { field: 'LastShift', header: 'Last Shift' },
        { field: 'CheckDate', header: 'Check Date' },
        { field: 'AlarmDate', header: 'Alarm Date' },
        { field: 'SendByFlash', header: 'Send By Flash' },
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
