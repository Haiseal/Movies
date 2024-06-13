import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import WatchPage from './components/WatchPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddAdmin from './components/AddAdmin';
import AdminPage from './components/AdminPage';
import Favorites from './components/Favorites';
import AdminSidebar from './components/admin/AdminSdebar';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path='/admin' element={<AdminSidebar/>}/>
          <Route path="/" element={<Movies />} />
          <Route path="/watchPage" element={<WatchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/addAdmin" element={<AddAdmin />} />
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path='/detail' element={<MovieDetail/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
