import { ModuleValue } from '../../reducers/module-form.reducer';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArrayState } from 'ngrx-forms';

@Component({
  selector: 'app-choose-module',
  templateUrl: './choose-module.component.html',
  styleUrls: ['./choose-module.component.scss'],
})
export class ChooseModuleComponent implements OnInit {
  @Input() formState!: FormArrayState<ModuleValue>;
  @Input() options!: number[];
  @Output() addChooseModuleEvent = new EventEmitter<number>();
  @Output() removeChooseModuleEvent = new EventEmitter<number>();
  moduleNames!: string[];

  constructor() {}

  ngOnInit(): void {}

  addChooseModule(id: number): void {
    this.addChooseModuleEvent.emit(id);
  }

  removeChooseModule(id: number): void {
    this.removeChooseModuleEvent.emit(id);
  }

  filterModuleName(inputtedCustNameEvent: any): void {
    let query = inputtedCustNameEvent.query;
    this.moduleNames = [
      'CBDM-LOT_RECEIVE_DEL_WI',
      'CBDM-LOT_SHIP',
      'CBDM-WO_RETURN',
    ];
  }
}
