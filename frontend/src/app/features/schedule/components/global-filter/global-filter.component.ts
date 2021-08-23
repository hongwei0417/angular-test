import { FilterFormValue } from './../../reducers/schedule-list-page.reducer';
import { FormGroupState } from 'ngrx-forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-filter',
  templateUrl: './global-filter.component.html',
  styleUrls: ['./global-filter.component.scss'],
})
export class GlobalFilterComponent implements OnInit {
  @Input() formState!: FormGroupState<FilterFormValue>;
  constructor() {}

  ngOnInit(): void {}
}
