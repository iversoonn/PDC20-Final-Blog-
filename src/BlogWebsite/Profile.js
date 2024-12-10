import React, { useState, useEffect } from "react";

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
    return <div className="text-center my-5">You need to log in first!</div>;
  }

  return (
    <div className="container text-center">
      <h2>Your Profile</h2>
      <div>
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <p>No profile picture</p>
        )}
      </div>
      <div className="my-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePicUpload}
          className="form-control"
          style={{ maxWidth: "400px", margin: "0 auto" }}
        />
      </div>
      <p><strong>First Name:</strong> {currentUser.firstName || "N/A"}</p>
      <p><strong>Last Name:</strong> {currentUser.lastName || "N/A"}</p>
      <p><strong>Email:</strong> {currentUser.email || "N/A"}</p>
      <p><strong>Phone:</strong> {currentUser.phone || "N/A"}</p>
      <p><strong>Username:</strong> {currentUser.username || "N/A"}</p>
      <p><strong>Interests:</strong> {currentUser.interests || "N/A"}</p>
    </div>
  );
};

export default Profile;
