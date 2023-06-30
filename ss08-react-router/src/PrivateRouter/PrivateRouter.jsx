import React from "react";
import { Navigate, Outlet } from "react-router-dom/dist";

function PrivateRouter() {
  const isLogin = false;

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRouter;
