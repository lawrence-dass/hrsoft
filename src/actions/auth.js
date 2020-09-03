import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid,
  };
};

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startDemoLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithEmailAndPassword('test@test.com', 'test123');
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
