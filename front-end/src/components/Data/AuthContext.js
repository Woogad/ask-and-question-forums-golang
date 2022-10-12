import { Children, createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const userUrl = "http://localhost:8080/user"
    const [name, setName] = useState('')
    useEffect(() => {
        axios.get(`${userUrl}`, {
            withCredentials: true
        })
            .then(res => {
                setName(res.data.name)
                console.log(res)
            })
            .catch(res => {
                console.log("Error from user")
            })
    }, [])

    return <AuthContext.Provider value={name}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext

