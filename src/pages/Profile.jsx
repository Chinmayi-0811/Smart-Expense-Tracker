import { useState } from "react";
import "../styles/Profile.css";

function Profile() {
  const savedUser = JSON.parse(localStorage.getItem("user")) || {};

  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: savedUser.name || "",
    email: savedUser.email || "",
    username: savedUser.username || "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function saveProfile() {
    const existingUser =
      JSON.parse(localStorage.getItem("user")) || {};

    const updatedUser = {
      ...existingUser,
      ...user,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    alert("Profile Updated Successfully");

    setIsEditing(false);
  }

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="avatar">
          {user.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>

        <h2>{user.name}</h2>

        <p>{user.email}</p>

        <div className="profile-details">

          <label>Name</label>

          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!isEditing}
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!isEditing}
          />

          <label>Username</label>

          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            disabled={!isEditing}
          />

        </div>

        {isEditing ? (
          <div className="buttons">

            <button
              className="save-btn"
              onClick={saveProfile}
            >
              Save
            </button>

            <button
              className="cancel-btn"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>

          </div>
        ) : (
          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        )}

      </div>

    </div>
  );
}

export default Profile;