import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import SearchBar from "../components/SearchBar";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/Dashboard.css";

function Dashboard() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [];
  });

  const [editTransaction, setEditTransaction] = useState(null);
  const [search, setSearch] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  const income = transactions
    .filter((item) => item.type === "Income")
    .reduce((total, item) => total + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((total, item) => total + item.amount, 0);

  const balance = income - expense;

  function addTransaction(transaction) {
    setTransactions([
      ...transactions,
      transaction,
    ]);
  }

  function deleteTransaction(id) {
    setTransactions(
      transactions.filter(
        (item) => item.id !== id
      )
    );
  }

  function editItem(transaction) {
    setEditTransaction(transaction);
  }

  function updateTransaction(updatedTransaction) {
    const updatedTransactions =
      transactions.map((item) =>
        item.id === updatedTransaction.id
          ? updatedTransaction
          : item
      );

    setTransactions(updatedTransactions);
    setEditTransaction(null);
  }

  const filteredTransactions =
    transactions.filter((item) =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div
      className={
        darkMode
          ? "dashboard dark"
          : "dashboard"
      }
    >
      <Sidebar />

      <div className="main-content">

        <Navbar />

        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div className="dashboard-content">

          <h1>Dashboard</h1>

          <div className="cards">

            <div className="card income">
              <h3>Total Income</h3>
              <h2>₹{income}</h2>
            </div>

            <div className="card expense">
              <h3>Total Expense</h3>
              <h2>₹{expense}</h2>
            </div>

            <div className="card balance">
              <h3>Balance</h3>
              <h2>₹{balance}</h2>
            </div>

          </div>

          <TransactionForm
            addTransaction={addTransaction}
            updateTransaction={updateTransaction}
            editTransaction={editTransaction}
          />

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <TransactionList
            transactions={filteredTransactions}
            deleteTransaction={deleteTransaction}
            editItem={editItem}
          />

        </div>

      </div>
    </div>
  );
}

export default Dashboard;