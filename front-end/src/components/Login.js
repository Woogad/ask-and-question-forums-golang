import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
function Login() {
    const apiUrl = "http://localhost:8080/login"
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = e => {
        e.preventDefault()
        axios.post(`${apiUrl}`, {

            email: email,
            password: password
        }, { withCredentials: true }).then(res => {
            alert("login successfully")
            navigate("/")
            window.location.reload();
        }).catch(res => {
            alert("fail to login")
        })
    }

    return (
        <div className='flex justify-center'>
            <div className='p-6 max-w-sm bg-white rounded-lg border border-amber-500 shadow-md w-80 h-fit mt-36 '>
                <div className='flex justify-center text-3xl font-semibold'>
                    <h1>เข้าสู่ระบบGo!</h1>
                </div>

                <div>
                    <form onSubmit={submit}>
                        <div class="mt-6 ">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">อีเมล</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
                            <label for="Password" class="block mb-2 text-sm font-medium text-gray-900 mt-2 ">รหัสผ่าน</label>
                            <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                onChange={(e) => setPassword(e.target.value)} placeholder="password" required />

                            <div className="flex justify-end mt-2">
                                <Link to='/Register'>
                                    <p class="underline ... hover:text-blue-500">สมัครสมาชิก</p>
                                </Link>
                            </div>

                        </div>
                        <div className='flex justify-center'>
                            <input type="submit" value={"ยืนยัน"} class="bg-transparent hover:bg-sky-400 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;