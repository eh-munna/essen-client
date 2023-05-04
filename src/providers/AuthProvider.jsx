import React, { createContext, useEffect, useState } from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../firebase/firebase_config';

// auth context

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // setting user
  const [user, setUser] = useState(null);

  // loading

  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn method
  const userSignIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // userSignOut
  const userLogOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };
  // authState

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setIsLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    googlePopUp,
    gitHubPopUp,
    createUser,
    userSignIn,
    userLogOut,
    isLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
