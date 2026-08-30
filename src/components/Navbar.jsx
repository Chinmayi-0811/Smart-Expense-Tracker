import "../styles/Navbar.css";

function Navbar() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="navbar">

      <div>
        <h2>💰 Smart Expense Tracker</h2>
        <p>Track your income and expenses easily</p>
      </div>

      <div className="profile">

        <div className="avatar">
          {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>

        <div>
          <h4>{user?.name || "User"}</h4>
          <p>{user?.email}</p>
        </div>

      </div>

    </div>
  );
}

export default Navbar;