import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../auth/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

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
      toastSuccessNotify('Registered successfully!!')
    } catch (error) {
      toastErrorNotify(error.message)
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
      toastSuccessNotify('Logged in successfully!!')
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const logOut = ()=>{
  signOut(auth)
  toastSuccessNotify('Logged out successfully!')

}

const userObserver = () =>{
  
}

  const values = { createUser, signIn,logOut };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
