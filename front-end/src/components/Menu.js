import axios from 'axios';
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from './Data/AuthContext';
function Menu() {
    const name = useContext(AuthContext)
    let menu = null;
    const apiUrl = "http://localhost:8080/logout"
    const navigate = useNavigate()

    const logout = () => {
        axios.post(`${apiUrl}`, {}, { withCredentials: true })
            .then(() => {
                navigate("/")
                window.location.reload();
                console.log(name)
            })
            .catch((res) => {
                console.log("fail to logout")
            })
    }

    if (name === '') {
        menu = (
            <>
                <Link to='/Login'>
                    <p className='ml-10 font-semibold hover:text-blue-900'>เข้าสู่ระบบ</p>
                </Link>
                <p className='font-semibold'>/</p>
                <Link to='/Register'>
                    <p href='/' className='font-semibold hover:text-blue-900'>สมัครสมาชิก</p>
                </Link>
            </>
        )

    }
    else {
        menu = (
            <>
                <Link to='/' onClick={logout}>
                    <p className='ml-10 font-semibold hover:text-blue-900'>ออกจากระบบ</p>
                </Link>
            </>
        )

    }
    return (
        <div className='bg-amber-500 px-10 py-4 '>
            <div className='grid grid-cols-3 text-center text-slate-100'>
                <div>

                </div>
                <div>
                    <Link to='/'>
                        <p className='text-3xl font-bold hover:text-blue-900'>Go! board</p>
                    </Link>
                </div>
                <div className='flex justify-end text-center'>
                    <Link to='/Post'>
                        <p href='/' className='font-semibold hover:text-blue-900'>สร้างกระทู้</p>
                    </Link>
                    {menu}
                </div>
            </div>
        </div>

    )
}

export default Menu
