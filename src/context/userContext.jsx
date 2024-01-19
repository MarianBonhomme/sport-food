import { createContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);

  const [isLogged, setIsLogged] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (isLogged) => {
      setIsLogged(isLogged);
      setLoadingData(false);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ signIn, isLogged }}>
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
