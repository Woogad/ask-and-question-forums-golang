import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className='bg-amber-500 p-4 '>
            <div className='flex justify-end px-6 text-slate-100'>
                <Link to='/'>
                    <p className='text-3xl font-bold hover:text-blue-900'>Go! board</p>
                </Link>
                <div className='flex ml-96 mt-2'>
                    <Link to='/Post'>
                        <p href='/' className='font-semibold hover:text-blue-900'>สร้างกระทู้</p>
                    </Link>
                    <Link to='/Login'>
                        <p className='ml-10 font-semibold hover:text-blue-900'>เข้าสู่ระบบ</p>
                    </Link>
                    <p className='font-semibold'>/</p>
                    <Link to='/Register'>
                        <p href='/' className='font-semibold hover:text-blue-900'>สมัครสมาชิก</p>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Menu
