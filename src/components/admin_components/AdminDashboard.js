import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import useToken from "./useToken";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard!!</h1>
      <LogoutButton />
    </div>
  );
};

function LogoutButton() {
  const { removeToken } = useToken();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    fetch("/admin/logout");
    navigate("/login");
  };

  return <button onClick={handleLogout}>Click me</button>;
}

export default AdminDashboard;
