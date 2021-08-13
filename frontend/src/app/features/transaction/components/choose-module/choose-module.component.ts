import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-choose-module',
  templateUrl: './choose-module.component.html',
  styleUrls: ['./choose-module.component.scss']
})
export class ChooseModuleComponent implements OnInit {
  moduleForm!: FormGroup;
  moduleName!: string[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const moduleFormInfo = () => {
      this.moduleForm = this.fb.group({
        moduleName: [],
        issue:[false]
      });
    };

    moduleFormInfo();
  }

  filterModuleName(inputtedCustNameEvent: any): void {
    let query = inputtedCustNameEvent.query;
    this.moduleName = [
      'CBDM-LOT_RECEIVE_DEL_WI',
      'CBDM-LOT_SHIP',
      'CBDM-WO_RETURN',
    ]
  }

}
