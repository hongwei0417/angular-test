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
  name: string;
  code: string;
}

@Component({
  selector: 'app-txn-basic-info',
  templateUrl: './txn-basic-info.component.html',
  styleUrls: ['./txn-basic-info.component.scss'],
})
export class TxnCreateComponent implements OnInit {
  @Input() formState!: FormGroupState<TxnBasicInfo>;
  dateValueConverter = NgrxValueConverters.dateToISOString;

  APBookingIds: APBookingInfo[];

  stateOptions = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  constructor() {
    this.APBookingIds = [
      { name: 'EBAP-HLO999', code: '' },
      { name: 'BBAP-HLO999', code: '' },
      { name: 'ABAP-HLO999', code: '' },
    ];
  }

  ngOnInit(): void {}

  // filterAPBookingIds(inputtedCustNameEvent: any): void {
  //   let query = inputtedCustNameEvent.query;
  //   this.APBookingIds = ['1', '2'];
  // }
}
