import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

interface TableData{
  retry?:string;
  JobId:string;
  TRANSACTIONID:string;
  TRANSACTIONNAME:string;
  Shift:string;
  PreShift:string;
  IntervalMin:string;
  PassFlag:string;
  OverDueActive:string;
  RuleIndex:string;
  APName:string;
  Retries:string;
  MaxRetryTimes:string;
  MaxDispatchTimes:string;
  LoaderBufferTime:string;
  BackToBufferTime:string;
  ShiftBackToLoaderTime:string;
  BeginTime: string;
  EndTime: string;
  CreateTime: string;
}

const fakeData =[
  {
    JobId:'0000019102',
    TRANSACTIONID: "0000000061",
    TRANSACTIONNAME: "A73A_ForPortalCPHoldDisposition",
    Shift: "20201110 142000",
    PreShift: '20200926 192000',
    IntervalMin: '0 20 * ? * * *',
    PassFlag:'9',
    OverDueActive:'N',
    RuleIndex:'1',
    APName:'BIARR-HLO01',
    Retries:'0',
    MaxRetryTimes:'5',
    MaxDispatchTimes:'0',
    LoaderBufferTime:'10',
    BackToBufferTime:'10',
    ShiftBackToLoaderTime:'0',
    BeginTime:'20201110 150342',
    EndTime:'20201110 150348',
    CreateTime:'20201110 150342',
  },
  {
    JobId:'0000019102',
    TRANSACTIONID: "0000000061",
    TRANSACTIONNAME: "A73A_ForPortalCPHoldDisposition",
    Shift: "20201110 142000",
    PreShift: '20200926 192000',
    IntervalMin: '0 20 * ? * * *',
    PassFlag:'9',
    OverDueActive:'N',
    RuleIndex:'1',
    APName:'BIARR-HLO01',
    Retries:'0',
    MaxRetryTimes:'5',
    MaxDispatchTimes:'0',
    LoaderBufferTime:'10',
    BackToBufferTime:'10',
    ShiftBackToLoaderTime:'0',
    BeginTime:'20201110 150342',
    EndTime:'20201110 150348',
    CreateTime:'20201110 150342',
  },
]

@Component({
  selector: 'app-execute-log-table',
  templateUrl: './execute-log-table.component.html',
  styleUrls: ['./execute-log-table.component.scss']
})
export class ExecuteLogTableComponent implements OnInit {
  transactionNames!: string[];
  get transactionName() {
    return this.searchForm.get('transactionName');
  }

  searchForm!: FormGroup;
  tableData$!: Observable<TableData[]>;
  tableCols!: { field: keyof TableData; header: string }[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const setSearchForm = () => {
      this.searchForm = this.fb.group(
        {
          globalFilter: [],
          transactionName:[],

        },
      );
    };
    const setTableColumns = () => {
      this.tableCols = [
        { field: 'retry', header: 'Retry' },
        { field: 'JobId', header: 'Job ID' },
        { field: 'TRANSACTIONID', header: 'Transaction ID' },
        { field: 'TRANSACTIONNAME', header: 'Transaction Name' },
        { field: 'Shift', header: 'Shift' },
        { field: 'PreShift', header: 'PreShift' },
        { field: 'IntervalMin', header: 'Interval Min' },
        { field: 'PassFlag', header: 'Pass Flag' },
        { field: 'OverDueActive', header: 'Over Due Active'},
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
    };

    const setTableData = () => {
      this.tableData$ = of(fakeData)
    };

    setSearchForm();
    setTableColumns();
    setTableData();
  }



  filtertransactionNames(inputtedCustNameEvent: any): void {
    let query = inputtedCustNameEvent.query;
    this.transactionNames = [
      'A73A_ForPortalCPHoldDisposition',
      'OVT_InvAdjReport_Export_Mail',
      'OVT_InvAdjusmentReport',
      'CBDM TEST uTest1090115_1127',
    ]
  }

}
