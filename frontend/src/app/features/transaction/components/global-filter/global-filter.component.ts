import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-global-filter',
  templateUrl: './global-filter.component.html',
  styleUrls: ['./global-filter.component.scss'],
})
export class GlobalFilterComponent implements OnInit {
  searchForm: FormGroup = this.formBuilder.group({
    CustId: [],
    globalFilter: [],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}