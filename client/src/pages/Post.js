import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
        });
    });

  return (
    <div className="postPage">
      <div className="leftSide">
        <h1 className='title'>{postObject.title}</h1>
          <p className='postText'>{postObject.postText}</p>
          <h4 className='footer'>{postObject.username}</h4>
      </div>
      <div className="rightSide">
        <h1>Comment section</h1>
      </div>
    </div>
  )
}

export default Post
