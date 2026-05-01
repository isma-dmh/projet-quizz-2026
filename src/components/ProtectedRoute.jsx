import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ isConnected, children }) => {
  if (!isConnected()) return <Navigate to={"/connexion"} />;

  return children;
};
