import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Handsontable from 'handsontable';
import { FormArrayState, FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import {
  HandsontableHooks,
  rowRequireValidator,
} from 'src/app/shared/handsontable/handsontable.component';
import * as fromTxn from '../../reducers';
import { Action, select, Store } from '@ngrx/store';
import { JobSettingValue } from '../../reducers/job-setting-form.reducer';
import { JobSettingFormActions } from '../../actions';

@Component({
  selector: 'app-job-setting',
  templateUrl: './job-setting.component.html',
  styleUrls: ['./job-setting.component.scss'],
})
export class JobSettingComponent implements OnInit {
  jobSettingForm$!: Observable<FormGroupState<JobSettingValue>>;
  singleJobOptions$!: Observable<number[]>;

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

  constructor(private store$: Store<fromTxn.State>) {}

  ngOnInit(): void {
    this.jobSettingForm$ = this.store$.pipe(select(fromTxn.getJobSettingForm));
    this.singleJobOptions$ = this.store$.pipe(
      select(fromTxn.getSingleJobOptions)
    );
  }

  onAddSingleJobSetting(): void {
    this.store$.dispatch(JobSettingFormActions.addJobSetting());
  }

  onRemoveSingleJobSetting(id: number): void {
    this.store$.dispatch(JobSettingFormActions.removeJobSetting({ id }));
  }
}

interface TableDataSchema {
  ConditionID: string | null;
  ConditionName: string | null;
  ConditionValue: string | null;
  Memo: string | null;
}

type TableHeaders = Record<keyof TableDataSchema, string>;
