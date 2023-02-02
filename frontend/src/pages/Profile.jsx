import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import ProfileInfo from "../components/ProfileInfo";
import { useCurrentUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { user, setUser, token, setToken } = useCurrentUserContext();
  const handleDisconnection = () => {
    console.warn(user);
    // gestion de la deconnexion
    localStorage.clear();
    setUser({});
    setToken("");
    navigate("/profile");
  };
  return (
    <div
      className={
        !user.email ? "h-screen flex flex-col items-center gap-8 " : ""
      }>
      {user.email && <ProfileInfo />}
      {user.email && (
        <button
          className="w-[80%] border text-white bg-red p-2 rounded-xl mb-6"
          type="button"
          onClick={handleDisconnection}>
          Log out
        </button>
      )}
      {!token && <Login />}
      {!token && <Register />}
    </div>
  );
}

export default Profile;
