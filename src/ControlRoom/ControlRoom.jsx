import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase";


export const GlobalContext = createContext();

const ControlRoom = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    //create new user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // profile update
    const profileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }

    // signInUser
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOutUser
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    // additional login methods
    // login with google 
    const additionalLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('current user is', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [user])

    const globalInfo = {
        user,
        loading,
        createUser,
        profileUpdate,
        loginUser,
        signOutUser,
        additionalLogin,
    }

    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    )
}

ControlRoom.propTypes = {
    children: PropTypes.node,
}

export default ControlRoom