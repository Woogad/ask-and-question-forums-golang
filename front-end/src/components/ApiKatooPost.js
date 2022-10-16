import React from 'react'
import { useState, useEffect } from "react"
import { Link, useSearchParams } from 'react-router-dom';
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
    <>
      {post.map(e => {
        return (
          <Link to={`/katoo/${e.ID}`} key={e.ID} >
            <PostKatooData ID={e.ID} title={e.title} body={e.body} />
          </Link>
        )
      })}
    </>
  )
}

export default ApiKatooPost
