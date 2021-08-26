import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { createFormGroupState, FormGroupState, onNgrxForms } from 'ngrx-forms';
import { MailGroupListPageActions } from '../actions';
import { MailGroupListTableRow } from '../models/MailGroup';

export const FeatureKey = 'mailGroupListPage';

export interface SearchFormValue {
  globalFilter: string;
}

export interface State extends EntityState<MailGroupListTableRow> {
  loading: boolean;
  loaded: boolean;
  searchForm: FormGroupState<SearchFormValue>;
}

export const adapter: EntityAdapter<MailGroupListTableRow> =
  createEntityAdapter<MailGroupListTableRow>({
    selectId: (s) => s.MAIL_G_ID,
    sortComparer: false,
  });

export const filterFormState = createFormGroupState<SearchFormValue>(
  FeatureKey,
  {
    globalFilter: '',
  }
);

export const initialState: State = adapter.getInitialState({
  loading: true,
  loaded: false,
  searchForm: filterFormState,
});

export const reducer = createReducer(
  initialState,
  onNgrxForms(),
  on(
    MailGroupListPageActions.loadMailGroupListTable,
    (state, { type, mailGroups }) => {
      return adapter.addMany(mailGroups, {
        ...state,
        loading: false,
        loaded: true,
      });
    }
  ),
  on(MailGroupListPageActions.clearMailGroupListPageState, (state, action) => {
    return initialState;
  })
);

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getSearchForm = (state: State) => state.searchForm;
