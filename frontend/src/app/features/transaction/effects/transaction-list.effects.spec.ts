import { autoschtranms } from './../../../shared/testing/data/txnListTableData';
import { Actions } from '@ngrx/effects';
import {
  FakeDataService,
  fakeData,
} from './../../../core/services/fake-data.service';
import { TxnFormService } from './../services/txn-form.service';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { hot, cold, Scheduler } from 'jest-marbles';
import { TransactionListEffects } from './transaction-list.effects';
import {
  TxnApiActions,
  TxnCreatePageActions,
  TxnListPageActions,
} from '../actions';

describe('TransactionEffects', () => {
  let actions$: Observable<any>;
  let effects: TransactionListEffects;
  let txnFormService: TxnFormService;
  let fakeDataService: FakeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TransactionListEffects,
        TxnFormService,
        FakeDataService,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(TransactionListEffects);
    actions$ = TestBed.inject(Actions);
    txnFormService = TestBed.inject(TxnFormService);
    fakeDataService = TestBed.inject(FakeDataService);
  });

  describe('getTxnData$', () => {
    let fakeDataServiceSpy: jest.SpyInstance;

    beforeEach(() => {
      fakeDataServiceSpy = jest.spyOn(fakeDataService, 'getData$');
    });

    it('should return txn list data from fakeDataService(marble testing)', () => {
      const action = TxnListPageActions.loadTxnList();
      const completion = TxnApiActions.loadAllTxnApiSuccess({
        txnData: autoschtranms,
      });
      actions$ = hot('-a', { a: action });
      const response$ = cold('-a|', { a: fakeData });
      const expected$ = hot('--b', { b: completion });
      fakeDataServiceSpy.mockReturnValue(response$);
      expect(effects.getAllTxnData$).toBeObservable(expected$);
    });

    it('should return txn list data from fakeDataService(observable)', (done) => {
      const action = TxnListPageActions.loadTxnList();
      const completion = TxnApiActions.loadAllTxnApiSuccess({
        txnData: autoschtranms,
      });
      const response$ = of(fakeData);
      actions$ = of(action);
      fakeDataServiceSpy.mockReturnValue(response$);
      effects.getAllTxnData$.subscribe((action) => {
        expect(action).toEqual(completion);
        done();
      });
    });
  });

  describe('createTxn$', () => {
    let txnFormServiceSpy: jest.SpyInstance;

    beforeEach(() => {
      txnFormServiceSpy = jest.spyOn(txnFormService, 'createTxn$');
    });

    // it('should return create txn success with new txn data', () => {
    //   const action = TxnCreatePageActions.createTxn({
    //     title: 'test title',
    //     content: 'test content',
    //     executeCount: 10,
    //   });
    //   const completion = TxnApiActions.createTxnApiSuccess({
    //     txn: fakeData[0],
    //   });
    //   actions$ = hot('-a', { a: action });
    //   const response$ = cold('-a|', { a: fakeData[0] });
    //   const expected$ = hot('--b', { b: completion });
    //   txnFormServiceSpy.mockReturnValue(response$);
    //   expect(effects.createTxn$).toBeObservable(expected$);
    // });

    it('should return create txn fail with error msg(marble testing)', () => {
      const action = TxnCreatePageActions.createTxn({
        title: 'error',
        content: 'test content',
        executeCount: 10,
      });
      const completion = TxnApiActions.createTxnApiFailure({
        error: 'error occurred',
      });
      actions$ = hot('-a-----', { a: action });
      const response$ = cold('----#-', {}, 'error occurred');
      const expected$ = hot('-----b', { b: completion });
      txnFormServiceSpy.mockReturnValue(response$);
      expect(effects.createTxn$).toBeObservable(expected$);
    });

    it('should return create txn fail with error msg(observable)', (done) => {
      const action = TxnCreatePageActions.createTxn({
        title: 'error',
        content: 'test content',
        executeCount: 10,
      });
      const completion = TxnApiActions.createTxnApiFailure({
        error: 'error occurred',
      });
      actions$ = of(action);
      const response$ = throwError('error occurred');
      txnFormServiceSpy.mockReturnValue(response$);
      effects.createTxn$.subscribe((action) => {
        expect(action).toEqual(completion);
        done();
      });
    });
  });

  describe('deleteTxnData$', () => {
    it('should return delete txn id(marble testing)', () => {
      const action = TxnListPageActions.deleteTxn({ id: '666' });
      const completion = TxnApiActions.deleteTxnApiSuccess({ id: '666' });
      actions$ = hot('-a', { a: action });
      const expected = hot('-b', { b: completion });
      expect(effects.deleteTxnData$).toBeObservable(expected);
    });

    it('should return delete txn id(observable)', (done) => {
      const action = TxnListPageActions.deleteTxn({ id: '666' });
      const completion = TxnApiActions.deleteTxnApiSuccess({ id: '666' });
      actions$ = of(action);
      effects.deleteTxnData$.subscribe((action) => {
        expect(action).toEqual(completion);
        done();
      });
    });
  });
});
