import React, { useState, useEffect } from "react";
import "../Profile.css"; // Link to the new CSS file

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(user || {});
    setProfilePic(user?.profilePic || null);
  }, []);

  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
        const updatedUser = { ...currentUser, profilePic: reader.result };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = users.map((user) =>
          user.username === updatedUser.username ? updatedUser : user
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!currentUser.username) {
    return <div className="text-center profile-message">You need to log in first!</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-picture-section">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="profile-picture" />
          ) : (
            <div className="profile-placeholder">No Profile Picture</div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicUpload}
            className="upload-input"
          />
        </div>
        <div className="profile-details">
          <h2>{currentUser.firstName} {currentUser.lastName}</h2>
          <div className="profile-info">
            <p><strong>Email:</strong> {currentUser.email || "N/A"}</p>
            <p><strong>Phone:</strong> {currentUser.phone || "N/A"}</p>
            <p><strong>Username:</strong> {currentUser.username || "N/A"}</p>
            <p><strong>Interests:</strong> {currentUser.interests || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
