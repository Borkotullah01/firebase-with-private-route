import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {

    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    const TwitterProvider = new TwitterAuthProvider();
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password )
    }

    const Login = ( email, password ) => {
        setLoading(true)
        return signInWithEmailAndPassword( auth, email, password )
    }

    const GoogleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    
    const GithubLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, GithubProvider)
    }
    const TwitterLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, TwitterProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut( auth )
    }

    useEffect(()=>{
        onAuthStateChanged( auth, (currentUser)=> {
            setUser(currentUser)
            if (currentUser) {
                console.log("User is signed in");
                // ...
              } else {
                console.log("User is signed out");
              }
        } )
        setLoading(false)
    },[])

    const AuthInfo = {
        user,
        createUser,
        Login,
        GoogleLogIn,
        GithubLogIn,
        TwitterLogIn,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;