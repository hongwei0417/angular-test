import { MailGroupListTableRow } from '../../models/MailGroup';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { MailGroupListTableCol } from '../../models/MailGroup';

@Component({
  selector: 'app-mailgrp-list-table',
  templateUrl: './mailgrp-list-table.component.html',
  styleUrls: ['./mailgrp-list-table.component.scss'],
})
export class MailgrpListTableComponent implements OnInit {
  @Input() tableData: MailGroupListTableRow[] = [];
  tableCols: MailGroupListTableCol[] = [
    { field: 'edit', header: 'Edit' },
    { field: 'MAIL_G_ID', header: 'Mail Group ID' },
    { field: 'MAIL_G_NAME', header: 'Mail Group Name' },
    { field: 'ACTIVEFLAG', header: 'Active Flag' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
