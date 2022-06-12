import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer

const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    // register
    const handleRegister = async (user) => {
        console.log('going to create user in handleRegister:', user)
        try {
            let res = await axios.post('/api/auth', user)
            setUser(res.data.data)
            navigate('/')
        } catch (err) {
            alert('Error in Register')
            console.log(err)
        }
    }
    // login
    const handleLogin = async (user) => {
        console.log('going to login user in handleLogin:', user)
        try {
            let res = await axios.post('/api/auth/sign_in', user)
            setUser(res.data.data)
            navigate('/')
        } catch (err) {
            alert('Error in Login')
            console.log(err)
        }
    }

    // logout
    const handleLogout = async () => {
        console.log('going to logout user in handleLogin:')
        try {
            let res = await axios.delete('/api/auth/sign_out')
            setUser(null)
        } catch (err) {
            alert('Error in Logging Out')
            console.log(err)
        }
    }


    return (
        <AuthContext.Provider value={{user, setUser, handleRegister, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider