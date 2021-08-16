import { Observable } from 'rxjs';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroupState, NgrxValueConverters } from 'ngrx-forms';
import { TxnSettingFormValue } from '../../reducers/txn-setting-form.reducer';

@Component({
  selector: 'app-txn-basic-info',
  templateUrl: './txn-basic-info.component.html',
  styleUrls: ['./txn-basic-info.component.scss'],
})
export class TxnCreateComponent implements OnInit, OnDestroy {
  @Input() formState!: FormGroupState<TxnSettingFormValue>;
  @Input() submittedValue!: TxnSettingFormValue | undefined;
  dateValueConverter = NgrxValueConverters.dateToISOString;

  APBookingIds: string[] = [];

  stateOptions = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  filterAPBookingIds(inputtedCustNameEvent: any): void {
    let query = inputtedCustNameEvent.query;
    this.APBookingIds = ['1', '2'];
  }
}
