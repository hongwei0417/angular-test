import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { DllListTableCol, DllListTableRow } from '../../models/Dll';

@Component({
  selector: 'app-dll-list-table',
  templateUrl: './dll-list-table.component.html',
  styleUrls: ['./dll-list-table.component.scss'],
})
export class DllListTableComponent implements OnInit {
  @Input() tableData: DllListTableRow[] = [];
  tableCols: DllListTableCol[] = [
    { field: 'edit', header: 'Edit' },
    { field: 'DLL_SEQ', header: 'DLL Seq' },
    { field: 'DLL_DESC', header: 'DLL Description' },
    { field: 'DLL_PATH', header: 'DLL Path' },
    { field: 'DLL_NAME', header: 'DLL Name' },
    { field: 'NAMESPACE', header: 'Name Space' },
    { field: 'CLASS_NAME', header: 'Class Name' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
