import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {

  const navigate = useNavigate();
  const location = useLocation();

  function logout() {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  }

  return (
    <div className="sidebar">

      <h2 className="logo">💰 Expense Tracker</h2>

      <ul>

        <li
          className={
            location.pathname === "/dashboard"
              ? "active"
              : ""
          }
          onClick={() => navigate("/dashboard")}
        >
          🏠 Dashboard
        </li>

        <li
          className={
            location.pathname === "/analytics"
              ? "active"
              : ""
          }
          onClick={() => navigate("/analytics")}
        >
          📊 Analytics
        </li>

        <li
          className={
            location.pathname === "/profile"
              ? "active"
              : ""
          }
          onClick={() => navigate("/profile")}
        >
          👤 Profile
        </li>

        <li
          className={
            location.pathname === "/settings"
              ? "active"
              : ""
          }
          onClick={() => navigate("/settings")}
        >
          ⚙️ Settings
        </li>

      </ul>

      <button
        className="logout-btn"
        onClick={logout}
      >
        🚪 Logout
      </button>

    </div>
  );
}

export default Sidebar;