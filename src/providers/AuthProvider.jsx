import React, { createContext } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import app from '../firebase/firebase_config';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  // google sign in method
  const googlePopUp = (provider) => {
    return signInWithPopup(auth, provider);
  };
  // gitHub sign in  method
  const gitHubPopUp = () => {
    return signInWithPopup(auth, provider);
  };

  // email password user creation method
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user: { name: 'me' },
    createUser,
    googlePopUp,
    gitHubPopUp,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
