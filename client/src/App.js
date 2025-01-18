import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <Link to='/createpost' className="nav-link">Create A Post</Link>
          <Link to='/' className="nav-link">Home Page</Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/createpost' exact element={<CreatePost />} />
            <Route path='/post/:id' element={<Post />} />
          </Routes>
        </div>
      </Router>
    </div> 
  );
}

export default App;
