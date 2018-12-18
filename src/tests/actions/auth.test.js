import { login, logout } from '../../actions/auth';

test('should generate login action object ', () => {
  const uid = '123abc';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: '123abc'
  });
});

test('should', () => {
  const action = logout();
  expect(action).toEqual({ type: 'LOGOUT' });
});
