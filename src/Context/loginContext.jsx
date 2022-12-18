import React from 'react'
import { createContext, useState } from 'react'

export const AuthContext = createContext();

const LoginContext = ({children}) => {
    const [loginauth, setloginAuth] = useState(false);

    const handleLogin = () => {
        setloginAuth(!loginauth)
    }

  return (
    <AuthContext.Provider value={{loginauth, handleLogin}}>
        {children}
    </AuthContext.Provider>
  )
}

export default LoginContext