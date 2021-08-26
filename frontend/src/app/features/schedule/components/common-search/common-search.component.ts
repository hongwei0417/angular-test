import { FormGroupState } from 'ngrx-forms';
import { Component, Input, OnInit } from '@angular/core';
import * as fromScheduleListPage from '../../reducers/schedule-list-page.reducer';
import * as fromAlarmStatePage from '../../reducers/alarm-state-page.reducer';

@Component({
  selector: 'app-common-search',
  templateUrl: './common-search.component.html',
  styleUrls: ['./common-search.component.scss'],
})
export class GlobalFilterComponent implements OnInit {
  @Input() formState!: FormGroupState<
    fromScheduleListPage.SearchFormValue | fromAlarmStatePage.SearchFormValue
  >;
  constructor() {}

  ngOnInit(): void {}
}
