// import React, { createContext, useState } from 'react'
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../firebase.init';
// export const AuthContext = createContext();

// export default function AuthProvider({children}) {
//     const [user, setUser] = useState(null);
//     const createUser = (email,password) =>{
//         return createUserWithEmailAndPassword(auth, email, password)
//     }
// const authData = {
// user,
// setUser,
// createUser,
// }

//   return <AuthContext value={authData}>{children}</AuthContext>
// }






import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase.init';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }
    const logIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
       
    }
    const updateUser = (updateData) =>{
        return updateProfile(auth.currentUser, updateData);
    }
    const logOut = () =>{
        return signOut(auth);
    }
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            
            setUser(currentUser);
            setLoading(false);
        });
        return unSubcribe;
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
        updateUser,
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
}
