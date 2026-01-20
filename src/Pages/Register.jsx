import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "User",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(u => u.email === form.email);
    if (exists) {
      alert("User already exists");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        type="email"
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
        required
      />

      <select
        onChange={e => setForm({ ...form, role: e.target.value })}
      >
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
