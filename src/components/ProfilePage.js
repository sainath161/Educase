// ProfilePage.js
import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { userData } = useUser();
  const [profilePic, setProfilePic] = useState(null);

  const handleLogout = () => {
    navigate("/");
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
  };

  return (
    <div className="profile">
      <div className="container">
        <div className="heading">
          <p>Account Settings</p>
        </div>
        {userData && (
          <div className="profile-info">
            <div className="image-uploader">
              <div className="profile-pic-container">
                <label htmlFor="profile-pic-upload">
                  <img
                    src={
                      profilePic
                        ? URL.createObjectURL(profilePic)
                        : userData.profilePic || "default-profile-pic.png"
                    }
                    alt="Profile"
                    className="profile-pic"
                  />
                </label>
                <input
                  id="profile-pic-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                  style={{ display: "none" }}
                />
              </div>
              <h3>{userData.fullName}</h3>
              <p>{userData.email}</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
