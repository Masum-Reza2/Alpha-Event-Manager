import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase";


export const GlobalContext = createContext();

const ControlRoom = ({ children }) => {

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

    const globalInfo = {
        createUser,
        profileUpdate,
        loginUser,
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