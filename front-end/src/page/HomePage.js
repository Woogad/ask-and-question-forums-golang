import React from 'react'
import Menu from '../components/Menu'
import Home from '../components/Home'
import ApiKatooPost from '../components/ApiKatooPost'

function HomePage() {
    return (
        <div>
            <Menu />
            <Home />
            <ApiKatooPost />
        </div>
    )
}

export default HomePage
