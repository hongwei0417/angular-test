import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterLinkDirectiveStub } from '../../../../shared/testing/router-link-directive-stub.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnCreatePageComponent } from './txn-form-page';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TxnCreatePageActions } from '../../actions';
import { By } from '@angular/platform-browser';

describe('TransactionCreateComponent', () => {
  let component: TxnCreatePageComponent;
  let fixture: ComponentFixture<TxnCreatePageComponent>;
  let store$: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TxnCreatePageComponent, RouterLinkDirectiveStub],
      providers: [provideMockStore()],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store$ = TestBed.inject(MockStore);
    jest.spyOn(store$, 'dispatch');
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch a TxnCreatePage.createTxn action on submit', () => {
    const data = { title: 'test', content: 'test', executeCount: 10 };
    const action = TxnCreatePageActions.createTxn(data);
    component.onSubmit(data);
    expect(store$.dispatch).toBeCalledWith(action);
  });

  it('should dispatch a TxnCreatePage.clearState action on clear', () => {
    const action = TxnCreatePageActions.clearTxnCreatePageState();
    component.onClearState();
    expect(store$.dispatch).toBeCalledWith(action);
  });

  it('should navigate to txn list page', () => {
    const linkDes = fixture.debugElement.queryAll(
      By.directive(RouterLinkDirectiveStub)
    );
    const routerLinks = linkDes.map((de) =>
      de.injector.get(RouterLinkDirectiveStub)
    );
    linkDes[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(routerLinks[0].navigatedTo).toEqual(['/transaction', 'list']);
  });
});
