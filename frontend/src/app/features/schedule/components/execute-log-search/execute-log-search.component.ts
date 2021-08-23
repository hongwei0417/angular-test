import {
  box,
  Boxed,
  FormGroupState,
  NgrxValueConverter,
  NgrxValueConverters,
} from 'ngrx-forms';
import { Component, Input, OnInit } from '@angular/core';
import { SearchFormValue } from '../../reducers/execute-log-page.reducer';
import { PrimeNgConverts } from 'src/app/shared/converters/date';

@Component({
  selector: 'app-execute-log-search',
  templateUrl: './execute-log-search.component.html',
  styleUrls: ['./execute-log-search.component.scss'],
})
export class ExecuteLogSearchComponent implements OnInit {
  @Input() formState!: FormGroupState<SearchFormValue>;
  dateValueConverter = PrimeNgConverts.getDateRange;
  transactionNames: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  filtertransactionNames(inputtedCustNameEvent: any): void {
    let query = inputtedCustNameEvent.query;
    this.transactionNames = [
      'A73A_ForPortalCPHoldDisposition',
      'OVT_InvAdjReport_Export_Mail',
      'OVT_InvAdjusmentReport',
      'CBDM TEST uTest1090115_1127',
    ];
  }
}
