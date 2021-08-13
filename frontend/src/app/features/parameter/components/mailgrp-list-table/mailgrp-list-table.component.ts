import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

interface TableData{
  edit?:string;
  MAIL_G_ID:string;
  MAIL_G_NAME:string;
  ACTIVEFLAG:string;
}

const fakeData =[
  {
    MAIL_G_ID: "test0004",
    MAIL_G_NAME: "test999",
    ACTIVEFLAG: "N",
  },
  {
    MAIL_G_ID: "test0004",
    MAIL_G_NAME: "A73A_ForPortalCPHoldDisposition",
    ACTIVEFLAG: "N",
  },
  {
    MAIL_G_ID: "test0004",
    MAIL_G_NAME: "A73A_ForPortalCPHoldDisposition",
    ACTIVEFLAG: "N",
  },
  {
    MAIL_G_ID: "test0004",
    MAIL_G_NAME: "A73A_ForPortalCPHoldDisposition",
    ACTIVEFLAG: "N",
  },
]

@Component({
  selector: 'app-mailgrp-list-table',
  templateUrl: './mailgrp-list-table.component.html',
  styleUrls: ['./mailgrp-list-table.component.scss']
})
export class MailgrpListTableComponent implements OnInit {
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
        { field: 'edit', header: 'Edit' },
        { field: 'MAIL_G_ID', header: 'Mail Group ID' },
        { field: 'MAIL_G_NAME', header: 'Mail Group Name' },
        { field: 'ACTIVEFLAG', header: 'Active Flag' },
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
