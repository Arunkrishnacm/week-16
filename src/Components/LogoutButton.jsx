import { useDispatch } from "react-redux";
import { logout } from "../Features/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        dispatch(logout());
        navigate("/login");
      }}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
