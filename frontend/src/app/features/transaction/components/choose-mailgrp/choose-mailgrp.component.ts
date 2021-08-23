import { Component, Input, OnInit } from '@angular/core';
import { FormArrayState, FormGroupState } from 'ngrx-forms';
import { MailGroup } from '../../models/TxnForm';

@Component({
  selector: 'app-choose-mailgrp',
  templateUrl: './choose-mailgrp.component.html',
  styleUrls: ['./choose-mailgrp.component.scss'],
})
export class ChooseMailgrpComponent implements OnInit {
  @Input() formState!: FormGroupState<MailGroup>;

  mailGroup!: string[];

  constructor() {}

  ngOnInit(): void {}

  filterMailGroup(inputtedCustNameEvent: any): void {
    let query = inputtedCustNameEvent.query;
    this.mailGroup = ['MG0000000028', 'MG0000000028', 'test0004'];
  }
}
