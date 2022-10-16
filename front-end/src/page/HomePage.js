import React, { useContext } from 'react'
import Home from '../components/Home'
import ApiKatooPost from '../components/ApiKatooPost'
import AuthContext from '../components/Data/AuthContext'
function HomePage() {
    const name = useContext(AuthContext)
    return (
        <div>
            <div className="mr-6 mt-10 flex justify-center">
                {name ? ("hello " + name) : ""}
            </div>
            <Home />
            <ApiKatooPost />
        </div>
    )
}
export default HomePage
