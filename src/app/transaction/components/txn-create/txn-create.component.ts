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
  txnForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    executeCount: new FormControl(0, [Validators.required, Validators.min(0)]),
  });
  // create form type 2
  txnForm2 = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    executeCount: ['', [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.clearState.emit();
  }

  submit() {
    if (this.txnForm.valid) {
      console.log(this.txnForm);
      this.submitted.emit({
        title: this.txnForm.value.title,
        content: this.txnForm.value.content,
        executeCount: this.txnForm.value.executeCount,
      });
    }
  }

  submit2() {
    if (this.txnForm2.valid) {
      console.log(this.txnForm2);
      this.submitted.emit(this.txnForm2.value.title);
    }
  }
}
