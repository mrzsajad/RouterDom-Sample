import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p onClick={() => navigate("ChangePassword")}>change password</p>
      <p onClick={() => navigate("UploadAvatar")}>upload Avatar</p>
      <p onClick={() => navigate("GetProfile")}>get profile</p>
      <p onClick={() => navigate("ChangeProfile")}>change profile</p>
      <Outlet/>
    </div>
  );
};

export default Profile;
