import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase";


export const GlobalContext = createContext();

const ControlRoom = ({ children }) => {
    const [user, setUser] = useState(null)

    //create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // profile update
    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }

    // signInUser
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOutUser
    const signOutUser = () => {
        return signOut(auth);
    }

    // additional login methods
    // login with google 
    const additionalLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user is', currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const globalInfo = {
        user,
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