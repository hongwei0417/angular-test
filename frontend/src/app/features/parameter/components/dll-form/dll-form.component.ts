import { DllFormValue } from '../../reducers/dll-form-page.reducer';
import { FormGroupState } from 'ngrx-forms';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dll-form',
  templateUrl: './dll-form.component.html',
  styleUrls: ['./dll-form.component.scss'],
})
export class DllCreateFormComponent implements OnInit {
  @Input() formState!: FormGroupState<DllFormValue>;

  constructor() {}

  ngOnInit(): void {}
}
