import { FilterValue } from './../../reducers/txn-list-page.reducer';
import { FormGroupState } from 'ngrx-forms';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-global-filter',
  templateUrl: './global-filter.component.html',
  styleUrls: ['./global-filter.component.scss'],
})
export class GlobalFilterComponent implements OnInit {
  @Input() formState!: FormGroupState<FilterValue>;

  constructor() {}

  ngOnInit(): void {}
}
