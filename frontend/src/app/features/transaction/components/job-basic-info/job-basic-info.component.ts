import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroupState } from 'ngrx-forms';
import { JobBasicInfo } from '../../models/TxnForm';

@Component({
  selector: 'app-job-basic-info',
  templateUrl: './job-basic-info.component.html',
  styleUrls: ['./job-basic-info.component.scss'],
})
export class JobBasicInfoComponent implements OnInit {
  @Input() formState!: FormGroupState<JobBasicInfo>;
  DLLSeqs: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  filterDLLSeqs(inputtedCustNameEvent: any): void {
    let query = inputtedCustNameEvent.query;
    this.DLLSeqs = [
      '0000000003',
      '0000000004',
      '0000000012',
      '0000000013',
      '0000000020',
    ];
  }
}
