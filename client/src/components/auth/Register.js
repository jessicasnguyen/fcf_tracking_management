import React, { useContext, useState, useEffect } from 'react'
import { parsePath } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = useContext(AuthContext)
    // const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // with devise_token_auth
        // email must be 'valid' email and unique
        // password needs to be 6 or greater
        auth.handleRegister({email, password})
    }

  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <p>Email</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>Password</p>
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
            <button>Register</button>
        </form>
    </div>
  )
}

export default Register