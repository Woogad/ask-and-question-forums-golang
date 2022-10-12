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
            <p>katoo ID: {katoo.ID}</p>
            <p>katoo title: {katoo.title}</p>
            <p>katoo body: {katoo.body}</p>
            <p>katoo username: {katoo.username}</p>
        </div>
    )
}

export default PostKatooDetail


