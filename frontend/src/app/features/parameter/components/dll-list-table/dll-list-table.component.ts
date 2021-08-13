import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

interface TableData{
  edit?:string;
  DLL_SEQ:string;
  DLL_DESC:string;
  DLL_PATH:string;
  DLL_NAME:string;
  NAMESPACE:string;
  CLASS_NAME:string;
}

const fakeData =[
  {
    "DLL_SEQ": "0000000012",
    "DLL_DESC": "ad",
    "DLL_PATH": "dfgd",
    "DLL_NAME": "test.dll",
    "NAMESPACE": "zxczx",
    "CLASS_NAME": "zxcz"
  },
  {
    "DLL_SEQ": "0000000011",
    "DLL_DESC": "A73A_B2B",
    "DLL_PATH": "D:\\CIS_Platform\\ClientRule\\B2B\\A73A_B2B\\",
    "DLL_NAME": "A73A_B2B.dll",
    "NAMESPACE": "A73A_B2B",
    "CLASS_NAME": "RuleInstance"
  },
  {
    "DLL_SEQ": "0000000010",
    "DLL_DESC": "U48A_B2B",
    "DLL_PATH": "D:\\CIS_Platform\\ClientRule\\B2B\\U48A_B2B\\",
    "DLL_NAME": "U48A_B2B.dll",
    "NAMESPACE": "U48A_B2B",
    "CLASS_NAME": "RuleInstance"
  },
  {
    "DLL_SEQ": "0000000009",
    "DLL_DESC": "Sample B2B",
    "DLL_PATH": "D:\\DLL\\",
    "DLL_NAME": "Sample_B2B.dll",
    "NAMESPACE": "Sample_B2B",
    "CLASS_NAME": "RuleInstance"
  },
  {
    "DLL_SEQ": "0000000008",
    "DLL_DESC": "test",
    "DLL_PATH": "D:\\DLL\\",
    "DLL_NAME": "Sample_B2B.dll",
    "NAMESPACE": "Sample_B2B",
    "CLASS_NAME": "RuleInstance"
  },
  {
    "DLL_SEQ": "0000000007",
    "DLL_DESC": "Test07",
    "DLL_PATH": "D:\\DLL\\",
    "DLL_NAME": "Sample_B2B.dll",
    "NAMESPACE": "Sample_B2B",
    "CLASS_NAME": "RuleInstance"
  },
  {
    "DLL_SEQ": "0000000006",
    "DLL_DESC": "updateTest06",
    "DLL_PATH": "D:\\DLL\\",
    "DLL_NAME": "Sample_B2B.dll",
    "NAMESPACE": "Sample_B2B",
    "CLASS_NAME": "RuleInstance"
  },
  {
    "DLL_SEQ": "0000000005",
    "DLL_DESC": "UpdateTest05",
    "DLL_PATH": "D:\\DLL\\",
    "DLL_NAME": "Sample_B2B.dll",
    "NAMESPACE": "Sample_B2B",
    "CLASS_NAME": "RuleInstance"
  },
  {
    "DLL_SEQ": "0000000004",
    "DLL_DESC": "Test04",
    "DLL_PATH": "D:\\DLL\\",
    "DLL_NAME": "Sample_B2B.dll",
    "NAMESPACE": "Sample_B2B",
    "CLASS_NAME": "RuleInstance"
  },
  {
    "DLL_SEQ": "0000000003",
    "DLL_DESC": "Test03",
    "DLL_PATH": "D:\\DLL\\",
    "DLL_NAME": "Sample_B2B.dll",
    "NAMESPACE": "Sample_B2B",
    "CLASS_NAME": "RuleInstance"
  },
  {
    "DLL_SEQ": "0000000002",
    "DLL_DESC": "Test02",
    "DLL_PATH": "D:\\DLL\\",
    "DLL_NAME": "Sample_B2B.dll",
    "NAMESPACE": "Sample_B2B",
    "CLASS_NAME": "RuleInstance"
  },
  {
    "DLL_SEQ": "0000000001",
    "DLL_DESC": "Sample B2B",
    "DLL_PATH": "D:\\DLL\\",
    "DLL_NAME": "Sample_B2B.dll",
    "NAMESPACE": "Sample_B2B",
    "CLASS_NAME": "RuleInstance"
  }
]

@Component({
  selector: 'app-dll-list-table',
  templateUrl: './dll-list-table.component.html',
  styleUrls: ['./dll-list-table.component.scss']
})
export class DllListTableComponent implements OnInit {
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
        { field: 'DLL_SEQ', header: 'DLL Seq' },
        { field: 'DLL_DESC', header: 'DLL Description' },
        { field: 'DLL_PATH', header: 'DLL Path' },
        { field: 'DLL_NAME', header: 'DLL Name' },
        { field: 'NAMESPACE', header: 'Name Space' },
        { field: 'CLASS_NAME', header: 'Class Name' },
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
