import { DllFormValue } from '../../reducers/dll-form-page.reducer';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromParameter from '../../reducers';

@Component({
  selector: 'app-dll-form-page',
  templateUrl: './dll-form-page.component.html',
  styleUrls: ['./dll-form-page.component.scss'],
})
export class DllCreatePageComponent implements OnInit {
  dllFormState$!: Observable<FormGroupState<DllFormValue>>;

  constructor(private store$: Store<fromParameter.State>) {}

  ngOnInit(): void {
    this.dllFormState$ = this.store$.select(fromParameter.getDllFormState);
  }

  save(): void {}
}
