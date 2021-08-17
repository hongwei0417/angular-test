import { MailGroupValue } from './../../reducers/mail-group-form.reducer';
import { ModuleValue } from '../../reducers/module-form.reducer';
import { FqCollectionValue } from './../../reducers/frequency-setting-form.reducer';
import { getTxnCreateError } from './../../reducers/index';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormArrayState, FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as fromTxn from '../../reducers';
import { TxnSettingFormValue } from '../../reducers/txn-setting-form.reducer';
import { TxnSettingFormActions } from '../../actions';
import { randomInt } from 'crypto';

@Component({
  selector: 'app-txn-setting',
  templateUrl: './txn-setting.component.html',
  styleUrls: ['./txn-setting.component.scss'],
})
export class TxnSettingComponent implements OnInit {
  settingFormState$!: Observable<FormGroupState<TxnSettingFormValue>>;
  fqSettingFormState$!: Observable<FormGroupState<FqCollectionValue>>;
  moduleFormState$!: Observable<FormArrayState<ModuleValue>>;
  mailGroupFormState$!: Observable<FormArrayState<MailGroupValue>>;
  fqSettingOptions$!: Observable<number[]>;
  fqSettingShowAccordions$!: Observable<boolean[]>;
  chooseModuleOptions$!: Observable<number[]>;

  constructor(private store$: Store<fromTxn.State>) {}

  ngOnInit(): void {
    this.settingFormState$ = this.store$.pipe(
      select(fromTxn.getTxnSettingForm)
    );
    this.fqSettingFormState$ = this.store$.pipe(
      select(fromTxn.getFqSettingForm)
    );
    this.fqSettingOptions$ = this.store$.pipe(
      select(fromTxn.getFqSettingOptions)
    );
    this.fqSettingShowAccordions$ = this.store$.pipe(
      select(fromTxn.getFqSettingShowAccordions)
    );
    this.moduleFormState$ = this.store$.pipe(select(fromTxn.getModuleForm));
    this.chooseModuleOptions$ = this.store$.pipe(
      select(fromTxn.getModuleOptions)
    );
    this.mailGroupFormState$ = this.store$.pipe(
      select(fromTxn.getMailGroupForm)
    );
  }

  onAddFrequencySetting(): void {
    this.store$.dispatch(TxnSettingFormActions.addFrequencySetting());
  }

  onRemoveFrequencySetting(id: number): void {
    this.store$.dispatch(TxnSettingFormActions.removeFrequencySetting({ id }));
  }

  onToggleFqAccordion(id: number): void {
    this.store$.dispatch(TxnSettingFormActions.toggleFqAccordion({ id }));
  }

  onAddChooseModule(id: number): void {
    this.store$.dispatch(TxnSettingFormActions.addChooseModule({ id }));
  }

  onRemoveChooseModule(id: number): void {
    this.store$.dispatch(TxnSettingFormActions.removeChooseModule({ id }));
  }
}
