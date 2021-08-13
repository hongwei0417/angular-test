import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Handsontable from 'handsontable';
import { HandsontableHooks,rowRequireValidator } from 'src/app/shared/handsontable/handsontable.component';


@Component({
  selector: 'app-txn-create-job',
  templateUrl: './txn-create-job.component.html',
  styleUrls: ['./txn-create-job.component.scss']
})
export class TxnCreateJobComponent implements OnInit {

  allJobDLLCondition!: FormGroup;
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
  jobDLLCondition!: FormGroup;


  tableHeaders: TableHeaders = {
    ConditionID: 'Condition ID',
    ConditionName: 'Condition Name',
    ConditionValue: 'Condition Value',
    Memo: 'Memo',
  };
  dataSchema: TableDataSchema = {
    ConditionID: null,
    ConditionName: null,
    ConditionValue: null,
    Memo: null,
  };
  setting: Handsontable.GridSettings = {
    columns: [
      {
        data: 'ConditionID',
        type: 'text',
        validator: rowRequireValidator,
      },
      {
        data: 'ConditionName',
        type: 'text',
        validator: rowRequireValidator,
      },
      {
        data: 'ConditionValue',
        type: 'text',
        validator: rowRequireValidator,
      },
      {
        data: 'Memo',
        type: 'text',
        validator: rowRequireValidator,
      },
      // {
      //   data: 'TapingContent',
      //   type: 'dropdown',
      //   source: ['Pick up as much as possible', 'Fixed amount'],
      //   validator: rowRequireValidator,
      // },
      // {
      //   data: 'TapingQty',
      //   type: 'numeric',
      // },
      // {
      //   data: 'ReelQty',
      //   type: 'numeric',
      // },
      // {
      //   data: 'CarrierTapePN',
      //   type: 'text',
      // },
    ],
    dataSchema: this.dataSchema,
    colHeaders: Object.values(this.tableHeaders),
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const allJobConditionInfo = () => {
      this.allJobDLLCondition = this.formBuilder.group({
        ConditionID: [, Validators.required],
        ConditionName: [, Validators.required],
        ConditionValue: [, Validators.required],
        Memo: [, Validators.required],
      });
    };

    const jobFormInfo = () => {
      this.jobForm = this.formBuilder.group({
        jobName: [, Validators.required],
        maxRetry: [, Validators.required],
        DLLSeq: [, Validators.required],
      });
    };

    const jobConditionInfo = () => {
      this.jobDLLCondition = this.formBuilder.group({
        ConditionID: [, Validators.required],
        ConditionName: [, Validators.required],
        ConditionValue: [, Validators.required],
        Memo: [, Validators.required],
      });
    };

    allJobConditionInfo();
    jobFormInfo();
    jobConditionInfo();
  }


  filterDLLSeqs(inputtedCustNameEvent: any): void {
    let query = inputtedCustNameEvent.query;
    this.DLLSeqs = [
      '0000000003',
      '0000000004',
      '0000000012',
      '0000000013',
      '0000000020'
    ]
  }

}


interface TableDataSchema {
  ConditionID: string | null;
  ConditionName: string | null;
  ConditionValue: string | null;
  Memo: string | null;
  // ReelQty: number | null;
  // TapingContent: string | null;
  // TapingQty: number | null;
  // CarrierTapePN: string | null;
}

type TableHeaders = Record<keyof TableDataSchema, string>;
