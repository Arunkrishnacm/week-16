import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AdminPanel from "./Pages/AdminPanel";
import UserPanel from "./Pages/UserPanel";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/admin-panel"
        element={
          <ProtectedRoute role="Admin">
            <AdminPanel />
          </ProtectedRoute>
        }
      />

      <Route
        path="/user-panel"
        element={
          <ProtectedRoute role="User">
            <UserPanel />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
