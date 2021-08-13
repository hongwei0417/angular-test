import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dll-create-form',
  templateUrl: './dll-create-form.component.html',
  styleUrls: ['./dll-create-form.component.scss']
})
export class DllCreateFormComponent implements OnInit {
  dllForm!: FormGroup;
  get DLLDescription() {
    return this.dllForm.get('DLLDescription');
  }
  get DLLPath() {
    return this.dllForm.get('DLLPath');
  }
  get DLLName() {
    return this.dllForm.get('DLLName');
  }
  get NameSpace() {
    return this.dllForm.get('NameSpace');
  }
  get ClassName() {
    return this.dllForm.get('ClassName');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const dllFormInfo = () => {
      this.dllForm = this.fb.group({
        DLLDescription: [, Validators.required],
        DLLPath: [, Validators.required],
        DLLName: [, Validators.required],
        NameSpace: [, Validators.required],
        ClassName:[, Validators.required],
      });
    };

    dllFormInfo();
  }

}
