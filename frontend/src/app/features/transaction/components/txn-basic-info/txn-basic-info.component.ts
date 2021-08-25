import { TxnFormType } from './../../models/TxnForm';
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
import { TxnBasicInfo } from '../../models/TxnForm';
interface APBookingInfo {
  label: string;
  value: string;
}

@Component({
  selector: 'app-txn-basic-info',
  templateUrl: './txn-basic-info.component.html',
  styleUrls: ['./txn-basic-info.component.scss'],
})
export class TxnCreateComponent implements OnInit {
  @Input() formState!: FormGroupState<TxnBasicInfo>;
  @Input() formMode!: TxnFormType;
  txnFormMode = TxnFormType;
  dateValueConverter = NgrxValueConverters.dateToISOString;

  APBookingIds: APBookingInfo[] = [
    { label: 'EBAP-HLO999', value: 'EBAP-HLO999' },
    { label: 'BBAP-HLO999', value: 'BBAP-HLO999' },
    { label: 'ABAP-HLO999', value: 'ABAP-HLO999' },
  ];

  stateOptions = [
    { label: 'Yes', value: 'Y' },
    { label: 'No', value: 'N' },
  ];

  constructor() {}

  ngOnInit(): void {}

  // filterAPBookingIds(inputtedCustNameEvent: any): void {
  //   let query = inputtedCustNameEvent.query;
  //   this.APBookingIds = ['1', '2'];
  // }
}
