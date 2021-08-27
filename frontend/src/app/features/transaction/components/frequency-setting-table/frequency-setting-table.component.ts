import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  FormArrayState,
  FormGroupState,
  NgrxValueConverters,
} from 'ngrx-forms';
import { FrequencySetting } from '../../models/TxnForm';

interface TimeZoneInfo {
  name: string;
  code: string;
}

@Component({
  selector: 'app-frequency-setting-table',
  templateUrl: './frequency-setting-table.component.html',
  styleUrls: ['./frequency-setting-table.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrequencySettingTableComponent implements OnInit {
  @Input() formState!: FormArrayState<FrequencySetting>;
  @Input() options!: number[];
  @Input() showAccordions!: boolean[];
  @Output() addFqSettingEvent = new EventEmitter();
  @Output() removeFqSettingEvent = new EventEmitter<number>();
  @Output() toggleFqAccordionEvent = new EventEmitter<number>();
  @Output() showCronDialogEvent = new EventEmitter();
  dateValueConverter = NgrxValueConverters.dateToISOString;
  timeZoneIds: TimeZoneInfo[] = [];

  stateOptionsAccordion = [
    { label: 'Y', value: true },
    { label: 'N', value: false },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.timeZoneIds = [
      { name: 'Taipei Standard Time', code: '' },
      { name: 'Japan Standard Time', code: '' },
    ];
  }

  ngOnInit(): void {}

  // filterTimeZone(inputtedCustNameEvent: any): void {
  //   let query = inputtedCustNameEvent.query;
  //   this.timeZoneIds = ['Taipei Standard Time', 'Japan Standard Time'];
  // }

  addFrequencySetting(): void {
    this.addFqSettingEvent.emit();
  }

  removeFrequencySetting(id: number): void {
    this.removeFqSettingEvent.emit(id);
  }

  toggleAccordion(index: number): void {
    this.toggleFqAccordionEvent.emit(index);
  }

  showCronDialog(): void {
    this.showCronDialogEvent.emit();
  }
}
