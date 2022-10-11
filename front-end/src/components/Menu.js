import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

function Menu({ name }) {
    let menu = null;
    const apiUrl = "http://localhost:8080/logout"

    const logout = () => {
        axios.post(`${apiUrl}`, {}, { withCredentials: true })
            .then(() => {
                window.location.reload();
            })
            .catch((res) => {
                console.log(res)
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
