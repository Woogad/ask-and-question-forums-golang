import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import PostKatooData from './PostKatooData';

function ApiKatooPost() {
  const [post, setPost] = useState([]);
  const apiURL = "http://localhost:8080/katoo"

    useEffect(() => {
        axios.get(apiURL).then((response) => {
          setPost(response.data);
          console.log(response.data)
        });
      }, []);

  return (
    <div>
       <div className="">
        {post.map(e => {
          return <PostKatooData ID={e.ID} title={e.title} body={e.body} />             
        })}
      </div>
    </div>
  )
}

export default ApiKatooPost
