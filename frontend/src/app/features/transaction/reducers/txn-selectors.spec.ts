import * as fromTxn from './index';
import * as fromTxnListPage from './txn-list-page.reducer';
import * as fromTxnCreatePage from './txn-create-page.reducer';
import { fakeData } from '../../../core/services/fake-data.service';
import { autoschtranms } from './../../../shared/testing/data/txnListTableData';

describe('Txn Selectors', () => {
  let initialState: fromTxn.TxnState;

  beforeAll(() => {
    initialState = {
      [fromTxnCreatePage.FeatureKey]: {
        loading: true,
        error: 'this is a error',
      },
      [fromTxnListPage.FeatureKey]: {
        ...getEntityState(),
        loaded: true,
        loading: true,
        latestId: '1',
      },
    };
  });

  describe('txn list page selectors', () => {
    it('should get list page state', () => {
      const result =
        fromTxn.getTxnListPageEntitiesState.projector(initialState);
      expect(result).toMatchSnapshot();
      expect(result).toEqual(initialState[fromTxnListPage.FeatureKey]);
    });

    it('should get latest txn id', () => {
      const state: fromTxnListPage.State = {
        ...initialState[fromTxnListPage.FeatureKey],
        latestId: '666',
      };
      const result = fromTxn.getLatestTxnId.projector(state);
      expect(result).toBe(state.latestId);
    });

    it('should get latest txn data', () => {
      const state: fromTxnListPage.State = {
        ...initialState[fromTxnListPage.FeatureKey],
        latestId: initialState[fromTxnListPage.FeatureKey].ids[0] as string,
      };
      const result = fromTxn.getLatestTxn.projector(
        state.entities,
        state.latestId
      );
      expect(result).toEqual(state.entities[state.latestId as string]);
    });
  });

  describe('create txn page selectors', () => {
    it('should get create page state', () => {
      const result = fromTxn.getTxnCreatePageState.projector(initialState);
      expect(result).toMatchSnapshot();
      expect(result).toEqual(initialState[fromTxnCreatePage.FeatureKey]);
    });

    it('should get create error msg', () => {
      const result = fromTxn.getTxnCreateError.projector(
        initialState[fromTxnCreatePage.FeatureKey]
      );
      expect(result).toBe(initialState[fromTxnCreatePage.FeatureKey].error);
    });
  });

  const getEntityState = () => {
    const ids = autoschtranms.map((i) => i.TRANSACTIONID);
    const entities = {} as any;
    ids.forEach((i, n) => (entities[i] = autoschtranms[n]));
    const state: fromTxnListPage.State = {
      ...fromTxnListPage.initialState,
      ids,
      entities,
    };
    return state;
  };
});
