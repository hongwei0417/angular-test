import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-choose-mailgrp',
  templateUrl: './choose-mailgrp.component.html',
  styleUrls: ['./choose-mailgrp.component.scss']
})
export class ChooseMailgrpComponent implements OnInit {
  mailGroupForm!: FormGroup;
  get ownerIT() {
    return this.mailGroupForm.get('ownerIT');
  }
  get mailTo() {
    return this.mailGroupForm.get('mailTo');
  }
  get ownerCoordinator() {
    return this.mailGroupForm.get('ownerCoordinator');
  }
  get loaderOwner() {
    return this.mailGroupForm.get('loaderOwner');
  }
  get mailCC() {
    return this.mailGroupForm.get('mailCC');
  }
  get mailBCC() {
    return this.mailGroupForm.get('mailBCC');
  }
  get SAPOwner() {
    return this.mailGroupForm.get('SAPOwner');
  }
  get MESOwner() {
    return this.mailGroupForm.get('MESOwner');
  }

  mailGroup!: string[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const mailGroupFormInfo = () => {
      this.mailGroupForm = this.fb.group({
        ownerIT: [, Validators.required],
        mailTo: [, Validators.required],
        ownerCoordinator :[, Validators.required],
        loaderOwner:[, Validators.required],
        mailCC:[, Validators.required],
        mailBCC:[, Validators.required],
        SAPOwner:[, Validators.required],
        MESOwner:[, Validators.required]
      });
    };

    mailGroupFormInfo();
  }


  filterMailGroup(inputtedCustNameEvent: any): void {
    let query = inputtedCustNameEvent.query;
    this.mailGroup = [
      'MG0000000028',
      'MG0000000028',
      'test0004',
    ]
  }

}
