import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((response) => {
      setListOfPosts(response.data);
      // console.log(response.data);
    }
    )
  }, [])
  return (
    <div className="App">
      <h1>List of Posts</h1>
      {listOfPosts.map((value, key) => {
        return (
          <div className="post" key={key}>
            <div className="title">{value.title}</div>
            <div className="postText">{value.postText}</div>
            <div className='username'>{value.username}</div>
          </div>
        )
      })}
     </div> 
  );
}

export default App;
