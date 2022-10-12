import React, { useContext } from 'react'
import AuthContext from './Data/AuthContext'
import { Navigate } from 'react-router-dom'
export const RequAuth = ({ children }) => {
    const user = useContext(AuthContext)
    if (!user.name) {
        return <Navigate to='/login' />
    }
    else {

        return children
    }
}
