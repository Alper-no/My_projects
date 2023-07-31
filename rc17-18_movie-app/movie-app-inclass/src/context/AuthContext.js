import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../auth/firebase";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();


//* with custom hook
// export const useAuthCotext =() => {
//     return useContext(AuthContext)
// }

const AuthContextProvider = ({ children }) => {
    let navigate = useNavigate();
  const createUser = async (email, password) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  };

  const values = { createUser, signIn };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
