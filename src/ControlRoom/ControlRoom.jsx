import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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

    const globalInfo = {
        createUser,
        profileUpdate,
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