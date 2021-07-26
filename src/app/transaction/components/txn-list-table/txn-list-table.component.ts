import { Transaction } from './../../models/Transaction';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-txn-list-table',
  templateUrl: './txn-list-table.component.html',
  styleUrls: ['./txn-list-table.component.scss'],
})
export class TxnListTableComponent implements OnInit {
  @Input() txnData: Transaction[] = [];

  constructor() {}

  ngOnInit(): void {}
}
