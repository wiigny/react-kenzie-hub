import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const ProtectRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to={"/login"} />;
};
