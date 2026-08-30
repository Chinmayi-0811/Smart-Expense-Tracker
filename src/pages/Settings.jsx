import { useNavigate } from "react-router-dom";
import "../styles/Settings.css";

function Settings() {
  const navigate = useNavigate();

  function clearTransactions() {
    const confirmDelete = window.confirm(
      "Are you sure you want to clear all transactions?"
    );

    if (confirmDelete) {
      localStorage.removeItem("transactions");
      alert("All transactions deleted successfully.");
    }
  }

  function resetApplication() {
    const confirmReset = window.confirm(
      "This will delete all application data. Continue?"
    );

    if (confirmReset) {
      localStorage.clear();
      alert("Application reset successfully.");
      navigate("/login");
    }
  }

  function logout() {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  }

  return (
    <div className="settings-page">

      <h1>Settings</h1>

      <div className="settings-card">

        <button
          className="settings-btn clear"
          onClick={clearTransactions}
        >
          🗑 Clear All Transactions
        </button>

        <button
          className="settings-btn reset"
          onClick={resetApplication}
        >
          🔄 Reset Application
        </button>

        <button
          className="settings-btn logout"
          onClick={logout}
        >
          🚪 Logout
        </button>

      </div>

      <div className="about-card">

        <h2>About</h2>

        <p><strong>Application:</strong> Smart Expense Tracker</p>

        <p><strong>Version:</strong> 1.0</p>

        <p>
          Manage your daily income and expenses with a simple and interactive
          React application.
        </p>

      </div>

    </div>
  );
}

export default Settings;