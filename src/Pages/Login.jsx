import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../Features/Auth/AuthSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    dispatch(loginSuccess(user));

    navigate(user.role === "Admin" ? "/admin-panel" : "/user-panel");
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
