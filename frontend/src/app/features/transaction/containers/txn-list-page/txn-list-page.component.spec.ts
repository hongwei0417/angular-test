import { RouterLinkDirectiveStub } from './../../../../shared/testing/router-link-directive-stub.directive';
import { TxnCreatePageComponent } from '../txn-form-page/txn-form-page';
import { fakeData } from '../../../../core/services/fake-data.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as fromTxn from '../../reducers';

import { TxnListPageComponent } from './txn-list-page.component';
import { createSelector } from '@ngrx/store';
import { TxnListPageActions } from '../../actions';
import { By } from '@angular/platform-browser';

describe('TransactionListComponent', () => {
  let fixture: ComponentFixture<TxnListPageComponent>;
  let listPageElement: HTMLElement;
  let component: TxnListPageComponent;
  let store$: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [
        TxnListPageComponent,
        TxnCreatePageComponent,
        RouterLinkDirectiveStub,
      ],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: createSelector(fromTxn.getAllTxns, (state) => state),
              value: fakeData,
            },
          ],
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnListPageComponent);
    component = fixture.componentInstance;
    listPageElement = fixture.nativeElement;
    store$ = TestBed.inject(MockStore);
    fixture.detectChanges();
    jest.spyOn(store$, 'dispatch');
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  // it('should dispatch a TxnListPage.LoadTxnList action on click', () => {
  //   const action = TxnListPageActions.loadTxnList();
  //   const btnElement = listPageElement.querySelector(
  //     '#generateDataBtn'
  //   ) as HTMLElement;
  //   btnElement.click();
  //   expect(store$.dispatch).toHaveBeenCalledWith(action);
  // });

  // it('should navigate to create txn page on click', () => {
  //   const linkDes = fixture.debugElement.queryAll(
  //     By.directive(RouterLinkDirectiveStub)
  //   );
  //   const routerLinks = linkDes.map((de) =>
  //     de.injector.get(RouterLinkDirectiveStub)
  //   );
  //   linkDes[1].triggerEventHandler('click', null);
  //   fixture.detectChanges();
  //   expect(routerLinks[1].navigatedTo).toEqual(['/transaction', 'create']);
  // });
});
