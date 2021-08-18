import { SingleJobSettingValue } from './../../reducers/job-setting-form.reducer';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Handsontable from 'handsontable';
import { FormGroupState, FormArrayState } from 'ngrx-forms';
import {
  HandsontableHooks,
  rowRequireValidator,
} from 'src/app/shared/handsontable/handsontable.component';
import { MailGroupValue } from '../../reducers/mail-group-form.reducer';
import { JobDllCondition } from '../../models/TxnForm';

@Component({
  selector: 'app-single-job-field',
  templateUrl: './single-job-field.component.html',
  styleUrls: ['./single-job-field.component.scss'],
})
export class SingleJobFieldComponent implements OnInit {
  @Input() formState!: FormArrayState<SingleJobSettingValue>;
  @Input() options!: number[];
  @Output() addSingleJobSettingEvent = new EventEmitter();

  jobDLLCondition!: FormGroup;

  tableHeaders: TableHeaders = {
    ConditionID: 'Condition ID',
    ConditionName: 'Condition Name',
    ConditionValue: 'Condition Value',
    Memo: 'Memo',
  };
  dataSchema: JobDllCondition = {
    ConditionID: '',
    ConditionName: '',
    ConditionValue: '',
    Memo: '',
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  addSingleJobSetting(): void {
    this.addSingleJobSettingEvent.emit();
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
