import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../firebase'
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged
} from 'firebase/auth'
import { setDoc, doc } from "firebase/firestore"; 

const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [user, setUser] = useState({})

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // userCredential.user contains information about the signed-up user
                const newUser = userCredential.user;
    
                // Set the document in Firestore
                setDoc(doc(db, 'users', newUser.email), {
                    savedShows: []
                });
            })
            .catch((error) => {
                // Handle errors during sign-up
                console.error('Error during sign-up:', error.message);
                alert(error.message)
            });
    }
    

    function logIn(email,password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        } 
    })

    return (<AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
        {children}
        </AuthContext.Provider>)
    
}

export function UserAuth() {
    return useContext(AuthContext)
}