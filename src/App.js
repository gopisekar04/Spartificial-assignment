import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home';
import PostsListingPage from './pages/PostsListingPage';
import UsersListingPage from './pages/UsersListingPage'


function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path="/" element={<Home />}/>
    <Route path='/post-listing' element={<PostsListingPage />} />
    <Route path='/user-listing' element={<UsersListingPage />} />
  </Routes>
  </BrowserRouter>
}

export default App;
