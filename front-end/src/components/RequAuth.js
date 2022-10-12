import React, { useContext } from 'react'
import AuthContext from './Data/AuthContext'
import { Navigate } from 'react-router-dom'
export const RequAuth = ({ children }) => {
    const name = useContext(AuthContext)
    if (!name) {
        return <Navigate to='/login' />
    }
    else {

        return children
    }
}
