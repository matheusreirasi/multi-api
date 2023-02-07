import React, { createContext, useEffect, useState } from "react";
import { IContext, IAuthProvider, IUser } from "./types";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "../controllers";


export const AuthContext = createContext<IContext>({} as IContext)


export const AuthProvider = ({children}: IAuthProvider) => {
    const [auth, setAuth] = useState<IUser | null>({})

    useEffect(() => {
        const auth = getUserLocalStorage()

        if (auth) {
            setAuth(auth)
        }
    }, [])


    const authenticate = async (username: string, password: string) => {
        const response = await LoginRequest(username, password)
        const payload = {token: response.token, username}

        setAuth(payload)
        setUserLocalStorage(payload)

    } 

    const logout = () => {
        setAuth(null)
        setUserLocalStorage(null)
    }


    return (
        <AuthContext.Provider value={{...auth, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
