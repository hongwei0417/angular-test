import {
  FrequencySettingFormValue,
  DynamicFormValue,
} from './../../reducers/frequency-setting-form.reducer';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormGroupState } from 'ngrx-forms';

interface timeZoneInfo {
  name: string,
  code: string
}


@Component({
  selector: 'app-frequency-setting-table',
  templateUrl: './frequency-setting-table.component.html',
  styleUrls: ['./frequency-setting-table.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrequencySettingTableComponent implements OnInit {
  @Input() formState!: FormGroupState<DynamicFormValue>;
  @Input() options!: string[];
  @Input() submittedValue!: DynamicFormValue | undefined;
  @Output() addFrequencySettingEvent = new EventEmitter();

  timeZoneIds:timeZoneInfo[];
  accordionStates = false;

  stateOptionsAccordion = [
    { label: 'Y', value: true },
    { label: 'N', value: false },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.timeZoneIds = [
      {name: 'Taipei Standard Time', code: ''},
      {name: 'Japan Standard Time', code: ''}
    ];
  }

  ngOnInit(): void {
    console.log(this.formState);
  }

  // filterTimeZone(inputtedCustNameEvent: any): void {
  //   let query = inputtedCustNameEvent.query;
  //   this.timeZoneIds = ['Taipei Standard Time', 'Japan Standard Time'];
  // }

  toggleAccordion(event: any): void {
    this.accordionStates = !this.accordionStates;
  }

  addFrequencySetting(): void {
    this.addFrequencySettingEvent.emit();
  }
}
