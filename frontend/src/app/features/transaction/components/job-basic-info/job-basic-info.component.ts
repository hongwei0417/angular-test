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

  jobForm!: FormGroup;
  get jobName() {
    return this.jobForm.get('jobName');
  }
  get maxRetry() {
    return this.jobForm.get('maxRetry');
  }
  get DLLSeq() {
    return this.jobForm.get('DLLSeq');
  }
  DLLSeqs!: string[];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const jobFormInfo = () => {
      this.jobForm = this.fb.group({
        jobName: [, Validators.required],
        maxRetry: [, Validators.required],
        DLLSeq: [, Validators.required],
      });
    };
    jobFormInfo();
  }

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
