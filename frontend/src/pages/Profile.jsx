import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import ProfileInfo from "../components/ProfileInfo";

function Profile() {
  return (
    <div className="flex flex-col items-center gap-6">
      <ProfileInfo />
      <Login />
      <Register />
    </div>
  );
}

export default Profile;
