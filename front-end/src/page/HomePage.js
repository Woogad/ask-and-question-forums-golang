import React, { useContext } from 'react'
import Menu from '../components/Menu'
import Home from '../components/Home'
import ApiKatooPost from '../components/ApiKatooPost'
function HomePage({ name }) {
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
