import React from "react";
import { useAuth } from "../context/useAuth";

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
    const auth = useAuth()

    if (!auth.username){
        return <h1>You don't have access</h1>
    }

    return children
}