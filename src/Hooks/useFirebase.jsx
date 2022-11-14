import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const useFirebase = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //   ** user creation
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   ** user signin

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   ** Sign out

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //   ** update profile

  const userProfileUpdate = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const authInfo = {
    userProfileUpdate,
    logOut,
    createUser,
    loading,
    setLoading,
    user,
    signIn,
  };

  return authInfo;
};

export default useFirebase;
