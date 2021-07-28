import * as fromAuthApi from './auth-api.actions';

describe('loginAuthApis', () => {
  it('should return an action', () => {
    expect(fromAuthApi.loginAuthApisSuccess({ user: null }).type).toBe(
      '[AuthApi] Login AuthApis'
    );
  });
});
