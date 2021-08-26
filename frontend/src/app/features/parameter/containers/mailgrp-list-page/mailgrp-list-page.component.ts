import { mailGroupListTableData } from '../../testing/data/mailGroup-list-table';
import { FormGroupState } from 'ngrx-forms';
import { MailGroupListTableRow } from '../../models/MailGroup';
import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchFormValue } from '../../reducers/mailGroup-list-page.reducer';
import { MailGroupListPageActions } from '../../actions';
import * as fromParameter from '../../reducers';

@Component({
  selector: 'app-mailgrp-list-page',
  templateUrl: './mailgrp-list-page.component.html',
  styleUrls: ['./mailgrp-list-page.component.scss'],
})
export class MailgrpListPageComponent implements OnInit, OnDestroy {
  searchForm$!: Observable<FormGroupState<SearchFormValue>>;
  mailGroups$!: Observable<MailGroupListTableRow[]>;

  constructor(private store$: Store<fromParameter.State>) {}

  ngOnInit(): void {
    this.searchForm$ = this.store$.select(
      fromParameter.getMailGroupListSearchForm
    );
    this.mailGroups$ = this.store$.select(fromParameter.getAllMailGroups);
    this.store$.dispatch(
      MailGroupListPageActions.loadMailGroupListTable({
        mailGroups: mailGroupListTableData,
      })
    );
  }

  ngOnDestroy(): void {
    this.store$.dispatch(
      MailGroupListPageActions.clearMailGroupListPageState()
    );
  }
}
