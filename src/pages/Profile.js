import React from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const initials = user.name.split(" ").map((n) => n[0]).join("").toUpperCase();

  return (
    <div className="page-container">
      <div className="profile-card">
        <div className="profile-avatar">{initials}</div>
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-email">{user.email}</p>
        <p className="profile-joined">Member since {user.joinedDate}</p>

        <div className="profile-stats">
          <div className="profile-stat">
            <span className="stat-number">3</span>
            <span className="stat-label">Courses Enrolled</span>
          </div>
          <div className="profile-stat">
            <span className="stat-number">12</span>
            <span className="stat-label">Lessons Done</span>
          </div>
          <div className="profile-stat">
            <span className="stat-number">4.8</span>
            <span className="stat-label">Avg. Rating</span>
          </div>
        </div>

        <button className="auth-btn logout-btn" onClick={() => { logout(); navigate("/"); }}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;