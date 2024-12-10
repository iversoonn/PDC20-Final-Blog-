import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Header from './BlogWebsite/Header'
import Home from './BlogWebsite/Home'
import Blog from './BlogWebsite/Blog'
import About from './BlogWebsite/About'
import Contact from './BlogWebsite/Contact'
import Login from './BlogWebsite/Login'
import Register from './BlogWebsite/Register'
import Profile from './BlogWebsite/Profile';
import PrivateRoute from './BlogWebsite/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const updateUserProfile = (updatedData) => {
    setCurrentUser((prevUser) => ({ ...prevUser, ...updatedData }));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    alert("You have been logged out.");
    window.location.href = "/login";
  };

  return (
    <Router>
      {currentUser && (
        <Header isAuthenticated={!!currentUser} onLogout={handleLogout} />
      )}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute currentUser={currentUser}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute currentUser={currentUser}>
              <Profile currentUser={currentUser} updateUserProfile={updateUserProfile} />
            </PrivateRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <PrivateRoute currentUser={currentUser}>
              <Blog />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute currentUser={currentUser}>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute currentUser={currentUser}>
              <Contact />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;