import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = () => {

  const getLogin = localStorage.getItem("isLogin")

 
  if (getLogin !== "Login") {
     

    return <Navigate to="/home" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
