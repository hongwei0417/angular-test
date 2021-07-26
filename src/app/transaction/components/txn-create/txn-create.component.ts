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
  @Output() submitted = new EventEmitter<string>();
  @Output() clearState = new EventEmitter();
  @Input() errorMessage: string = '';
  // create form type 1
  txnForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    executeCount: new FormControl(0, [Validators.required]),
  });

  constructor(private fromBuilder: FormBuilder) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.clearState.emit();
  }

  submit() {
    if (this.txnForm.valid) {
      console.log(this.txnForm);
      this.submitted.emit(this.txnForm.value.title);
    }
  }
}
