import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider(); 

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser); 
            console.log('current user: ', currentUser)
            setLoading(false)
        }); 
        return () => {
            return unSubscribe(); 
        }
    }, [])

    // google sign in 
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true); 
        return signInWithEmailAndPassword(auth , email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        console.log(name, photo)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo 
        })
    }   

    const authData = {
        user,
        loading, 
        signIn, 
        createUser, 
        logOut, 
        updateUserProfile, 
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;