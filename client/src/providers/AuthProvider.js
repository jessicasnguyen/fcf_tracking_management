import React from 'react'

const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={{x:1}}>
            {children}
        </AuthContext.Provider>
    )
}