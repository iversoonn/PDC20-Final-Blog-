import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    interests: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { confirmPassword, ...userData } = formData;

    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match." });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExists = users.some((user) => user.username === userData.username);

    if (isUserExists) {
      setErrors({ username: "Username already exists." });
      return;
    }

    localStorage.setItem("users", JSON.stringify([...users, userData]));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-form">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="input-group">
              <textarea
                name="interests"
                value={formData.interests}
                onChange={handleInputChange}
                placeholder="Your Interests"
                rows="3"
              ></textarea>
            </div>
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            {errors.username && <p className="error-message">{errors.username}</p>}
            <button type="submit" className="auth-btn">
              Register
            </button>
          </form>
          <div className="auth-links">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </div>
        <div className="auth-image">
          <h2>Join the Community</h2>
          <p>Create your account and start your journey today!</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
