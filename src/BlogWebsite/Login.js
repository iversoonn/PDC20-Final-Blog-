import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Auth.css";

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === formData.username && u.password === formData.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setCurrentUser(user);
      navigate("/profile");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-form">
          <h2>Member Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Type Your Username"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Type Your Password"
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="auth-btn">
              Login
            </button>
          </form>
          <div className="auth-links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
        <div className="auth-image">
          <h2>Quick Service Restaurant</h2>
          <p>Your Perfect Place to Taste Delicious Food</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
