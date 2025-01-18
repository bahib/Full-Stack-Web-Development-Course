import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
      axios.get('http://localhost:3001/posts').then((response) => {
        setListOfPosts(response.data);
        // console.log(response.data);
      }
      )
    }, [])
  return (
    <div className="home-container">
      <h1 className="home-title">List of Posts</h1>
      <div className="posts-container">
        {listOfPosts.map((value, key) => (
          <div className="post" key={key} onClick={() => {
            navigate(`/post/${value.id}`);
          }} >
            <div className="title">{value.title}</div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
