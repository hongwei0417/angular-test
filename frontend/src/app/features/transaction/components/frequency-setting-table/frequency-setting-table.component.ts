import { FqCollectionValue } from './../../reducers/frequency-setting-form.reducer';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormGroupState, NgrxValueConverters } from 'ngrx-forms';

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
  @Input() formState!: FormGroupState<FqCollectionValue>;
  @Input() options!: number[];
  @Input() showAccordions!: boolean[];
  @Input() submittedValue!: FqCollectionValue | undefined;
  @Output() addFqSettingEvent = new EventEmitter();
  @Output() toggleFqAccordionEvent = new EventEmitter<number>();
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

  toggleAccordion(index: number): void {
    this.toggleFqAccordionEvent.emit(index);
  }
}
