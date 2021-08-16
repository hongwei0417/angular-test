import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Handsontable from 'handsontable';
import { HandsontableHooks,rowRequireValidator } from 'src/app/shared/handsontable/handsontable.component';

@Component({
  selector: 'app-job-setting',
  templateUrl: './job-setting.component.html',
  styleUrls: ['./job-setting.component.scss']
})
export class JobSettingComponent implements OnInit {
  allJobDLLCondition!: FormGroup;

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const allJobConditionInfo = () => {
      this.allJobDLLCondition = this.fb.group({
        ConditionID: [, Validators.required],
        ConditionName: [, Validators.required],
        ConditionValue: [, Validators.required],
        Memo: [, Validators.required],
      });
    };

    allJobConditionInfo();
  }

}


interface TableDataSchema {
  ConditionID: string | null;
  ConditionName: string | null;
  ConditionValue: string | null;
  Memo: string | null;
}

type TableHeaders = Record<keyof TableDataSchema, string>;
