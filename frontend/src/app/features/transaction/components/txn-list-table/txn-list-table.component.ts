import { Transaction } from '../../models/Transaction';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-txn-list-table',
  templateUrl: './txn-list-table.component.html',
  styleUrls: ['./txn-list-table.component.scss'],
})
export class TxnListTableComponent implements OnInit {
  @Input() txnData: Transaction[] = [];
  @Output() removeEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  removeTxn(id: string) {
    this.removeEvent.emit(id);
  }
}
