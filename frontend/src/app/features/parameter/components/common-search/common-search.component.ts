import { FormGroupState } from 'ngrx-forms';
import { Component, Input, OnInit } from '@angular/core';
import * as fromMailGroupListPage from '../../reducers/mailGroup-list-page.reducer';

@Component({
  selector: 'app-common-search',
  templateUrl: './common-search.component.html',
  styleUrls: ['./common-search.component.scss'],
})
export class CommonSearchComponent implements OnInit {
  @Input() formState!: FormGroupState<fromMailGroupListPage.SearchFormValue>;
  constructor() {}

  ngOnInit(): void {}
}
