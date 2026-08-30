import "../styles/TransactionCard.css";

function TransactionCard({
  transaction,
  deleteTransaction,
  editItem,
}) {
  return (
    <div className="transaction-card">

      <div className="left">

        <h3>{transaction.title}</h3>

        <p>{transaction.type}</p>

      </div>

      <div className="right">

        <h3>₹{transaction.amount}</h3>

        <button
          className="edit-btn"
          onClick={() => editItem(transaction)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TransactionCard;