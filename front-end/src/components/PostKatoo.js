import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function PostData() {

    const [, setPost] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    const navigate = useNavigate()
    const apiURL = "http://localhost:8080/katoo"

    function createPost(e) {
        e.preventDefault()
        if (body.length && title.length >= 1) {
            axios.post(apiURL, {
                title: title,
                body: body
            }, {
                withCredentials: true
            })
                .then((response) => {
                    setPost(response.data);
                    alert("สร้างกระทู้เรียบร้อย")
                    navigate("/")
                })
                .catch(res => {
                    console.log(res)
                    alert("fail to create katoo")
                })

        }
        else {
            alert("กรุณาใส่ข้อความให้ครบ")
        }
    }

    return (
        <div>
            <div className='flex justify-center'>
                <div className=' p-6 max-w-3xl bg-amber-500 rounded-lg border border-amber-500 shadow-md w-[1500px] mt-36 '>
                    <div className='flex justify-center text-3xl text-white'>
                        <h1>โพสต์ลงกระทู้</h1>
                    </div>

                    <div>
                        <form className="my-4">
                            <div className="mb-6 ">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">1.ระบุคำถามของคุณ หรือหัวข้อของคุณ</label>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                                <label htmlFor="detail" className="block mb-2 text-sm font-medium text-white mt-5 ">2.กรอกรายละเอียดของคำถาม หรือหัวข้อของคุณ</label>
                                <textarea value={body} onChange={(e) => setBody(e.target.value)} type="text" id="detail" className="h-[250px] w-[720px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                            </div>

                            <div className='flex justify-center'>
                                <button onClick={createPost} className="bg-white hover:bg-sky-400 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded">
                                    โพสต์
                                </button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default PostData
