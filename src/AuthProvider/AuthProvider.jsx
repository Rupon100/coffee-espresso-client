import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from './../firebase/firebase.config';
// import { createUserWithEmailAndPassword } from 'firebase/auth/web-extension';

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [coffees, setCoffees] = useState([]);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const createUser = (email,pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const signInUser = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const contextValue = {
        coffees,
        setCoffees,
        user,
        loading,
        createUser,
        signInUser
    }
    return (
        <authContext.Provider value={contextValue}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;