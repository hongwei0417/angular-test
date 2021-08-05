import { Observable } from 'rxjs';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { AutoComplete } from 'primeng/autocomplete';


@Component({
  selector: 'app-txn-create',
  templateUrl: './txn-create.component.html',
  styleUrls: ['./txn-create.component.scss'],
})
export class TxnCreateComponent implements OnInit, OnDestroy {
  @Output() submitted = new EventEmitter<{
    title: string;
    content: string;
    executeCount: number;
  }>();
  @Output() clearState = new EventEmitter();
  @Input() errorMessage: string = '';
  // create form type 1
  // txnForm = new FormGroup({
  //   title: new FormControl('', [Validators.required]),
  //   content: new FormControl('', [Validators.required]),
  //   executeCount: new FormControl(0, [Validators.required, Validators.min(0)]),
  // });

  // create form type 2
  // txnForm2 = this.formBuilder.group({
  //   title: ['', Validators.required],
  //   content: ['', Validators.required],
  //   executeCount: ['', [Validators.required, Validators.min(0)]],
  // });

  //新增
  APBookingIds!: string[];
  timeZoneIds!: string[];

  stateOptions = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  stateOptionsAccordion = [
    { label: 'Y', value: true },
    { label: 'N', value: false },
  ];

  txnForm!: FormGroup;
  get TransactionName() {
    return this.txnForm.get('TransactionName');
  }
  get APBooking() {
    return this.txnForm.get('APBooking');
  }
  get Ao() {
    return this.txnForm.get('Ao');
  }

  frequencyForm!: FormGroup;

  accordionStates:boolean=false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const initForm = () => {
      this.txnForm = this.formBuilder.group({
        TransactionName: [, Validators.required],
        APBooking: [, Validators.required],
        ActiveFlag: [false, Validators.required],
        date: [],
        time:[],
        alarmIntervalMin:[]
      });
    };

    const frequencyFormInfo = () => {
      this.frequencyForm = this.formBuilder.group({
        LastTranTime: [, Validators.required],
        CronExpression: [, Validators.required],
        TimeZone:[],
        RetryTimes:[],
        StartAt:[],
        LoaderBufferTime:[],
        EndAt:[],
        BackToBufferTime:[],
        SkipOverDue:[false],
        ShiftBackToLoaderTime:[],
        SkipAllOverDue:[false]
      });
    };



    initForm();
    frequencyFormInfo();
  }

  ngOnDestroy(): void {
    this.clearState.emit();
  }

  filterAPBookingIds(inputtedCustNameEvent: any): void {
    let query = inputtedCustNameEvent.query;
    this.APBookingIds = ['1','2']
  }

  filterTimeZone(inputtedCustNameEvent: any): void {
    let query = inputtedCustNameEvent.query;
    this.timeZoneIds = [
      'Taipei Standard Time',
      'Japan Standard Time'
    ]
  }


  toggleAccordion(event:any) {
    console.log(event)
    this.accordionStates = !this.accordionStates;
  }

  // submit() {
  //   if (this.txnForm.valid) {
  //     console.log(this.txnForm);
  //     this.submitted.emit({
  //       title: this.txnForm.value.title,
  //       content: this.txnForm.value.content,
  //       executeCount: this.txnForm.value.executeCount,
  //     });
  //   }
  // }

  // submit2() {
  //   if (this.txnForm2.valid) {
  //     console.log(this.txnForm2);
  //     this.submitted.emit(this.txnForm2.value.title);
  //   }
  // }
}
