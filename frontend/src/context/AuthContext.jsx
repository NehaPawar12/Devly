//to keep track if user is authenticated

import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

//eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    return useContext(AuthContext)
}


export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);

    //We need this loading state so as to get on the same page when we refresh
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            setLoading(true)
            try {
                const res = await fetch("/api/auth/check", {
                    credentials: "include"
                })

                const data = await res.json();
                setAuthUser(data.user); // it can either be null or an authenticated user object.
            } catch (error) {
                toast.error(error.message)
            }
            finally {
                setLoading(false);
            }
        }
        checkUserLoggedIn();
    }, [])

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
