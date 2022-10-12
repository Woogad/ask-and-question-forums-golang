import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function Register() {

    const apiUrl = "http://localhost:8080/register"
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        axios.post(`${apiUrl}`, {
            name: name,
            email: email,
            password: password
        }).then(res => {
            alert("create user successfully")
            navigate('/login')
        }).catch(res => {
            alert("fail to create user")
        })
    }

    return (
        <div className='flex justify-center'>
            <div className='p-6 max-w-sm bg-white rounded-lg border border-amber-500 shadow-md dark:border-gray-700  w-80 h-fit mt-36 '>
                <div className='flex justify-center text-3xl'>
                    <h1>สมัครสมาชิกGo!</h1>
                </div>

                <div>
                    <form className="my-4" onSubmit={submit}>
                        <div className="mb-6 ">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">ชื่อผู้ใช้</label>
                            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                onChange={e => setName(e.target.value)} placeholder="name" required />
                            <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 ">อีเมล</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                onChange={e => setEmail(e.target.value)} placeholder="email" required />
                            <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 0">รหัสผ่าน</label>
                            <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                onChange={e => setPassword(e.target.value)} placeholder="password" required />
                        </div>

                        <div className='flex justify-center'>
                            <input type="submit" className="bg-transparent hover:bg-sky-400 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded" value={"ยืนยัน"} />
                        </div>
                    </form>

                </div>

            </div>

        </div>
    );
}
export default Register;