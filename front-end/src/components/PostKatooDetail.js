import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PostKatooDetail = () => {
    const Url = "http://localhost:8080/katoo"
    const [katoo, setKatoo] = useState({})
    const params = useParams()
    const katooID = params.katooID
    useEffect(() => {
        axios.get(`${Url}/` + katooID, {
            withCredentials: true
        })
            .then(res => {
                setKatoo(res.data)
            })
            .catch(res => {
                console.log(res)
            })
    }, [])
    return (
        <div>
            <div className='px-3'>

                <div class="mt-20 bg-amber-600 p-10 rounded-2xl shadow-lg">
                    <div class="text-white">
                        <p class="">ไอดี:{katoo.ID} </p>
                        <p class="text-5xl flex justify-center">หัวข้อเรื่อง:{katoo.title} </p>
                    </div>
                </div>

                <div class="mt-5 bg-amber-600 p-10 rounded-2xl">
                    <div class="text-white">
                        <p class='text-2xl font-thin'>{katoo.body} </p>
                        <p class="mt-20 text-lg">ผู้สร้าง:{katoo.username} </p>
                    </div>
                </div>

                <div class="mt-5 bg-amber-600 p-5 rounded-2xl mb-5">
                    <form action="" class="w-full p-5">
                        <label class="">
                            <span class="text-white">คอมเม้น</span>
                            <textarea class="block w-full mt-1 rounded-2xl p-3" rows="5"></textarea>
                        </label>
                        <button class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded mt-6">ส่งคอมเม้น</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostKatooDetail


