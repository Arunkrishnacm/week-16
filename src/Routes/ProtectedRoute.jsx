import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, role }) {
  const user = useSelector(state => state.auth.user);

  if (!user) return <Navigate to="/login" />;

  if (role && user.role !== role) {
    return (
      <Navigate
        to={user.role === "Admin" ? "/admin-panel" : "/user-panel"}
      />
    );
  }

  return children;
}

export default ProtectedRoute;
