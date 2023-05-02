import React, { createContext } from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import app from '../firebase/firebase_config';

// auth context

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // google sign in method
  const googlePopUp = (provider) => {
    return signInWithPopup(auth, provider);
  };
  // gitHub sign in  method
  const gitHubPopUp = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // email password user creation method
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user: { name: 'me' },
    googlePopUp,
    gitHubPopUp,
    createUser,
    userSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
