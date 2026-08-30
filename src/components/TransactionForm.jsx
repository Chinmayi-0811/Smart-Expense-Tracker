import { useState, useEffect } from "react";
import "../styles/TransactionForm.css";

function TransactionForm({
  addTransaction,
  updateTransaction,
  editTransaction,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");

  useEffect(() => {
    if (editTransaction) {
      setTitle(editTransaction.title);
      setAmount(editTransaction.amount);
      setType(editTransaction.type);
    }
  }, [editTransaction]);

  function handleSubmit(e) {
    e.preventDefault();

    if (editTransaction) {
      updateTransaction({
        id: editTransaction.id,
        title,
        amount: Number(amount),
        type,
      });
    } else {
      addTransaction({
        id: Date.now(),
        title,
        amount: Number(amount),
        type,
      });
    }

    setTitle("");
    setAmount("");
    setType("Expense");
  }

  return (
    <div className="transaction-form">

      <h2>
        {editTransaction ? "Edit Transaction" : "Add Transaction"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Income</option>
          <option>Expense</option>
        </select>

        <button type="submit">
          {editTransaction ? "Update" : "Add Transaction"}
        </button>

      </form>

    </div>
  );
}

export default TransactionForm;