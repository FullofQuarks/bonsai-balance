import React, { useState } from 'react'

interface AuthContextType {
    isSignedIn: boolean
    setIsSignedIn: (isSignedIn: boolean) => void
}

export const AuthContext = React.createContext<AuthContextType>(null!)

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    return (
        <AuthContext.Provider value={{ isSignedIn, setIsSignedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider