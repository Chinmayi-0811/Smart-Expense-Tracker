import TransactionCard from "./TransactionCard";
import "../styles/TransactionList.css";

function TransactionList({
  transactions,
  deleteTransaction,
  editItem,
}) {
  return (
    <div className="transaction-list">

      <h2>Recent Transactions</h2>

      {transactions.length === 0 ? (
        <p>No Transactions Found</p>
      ) : (
        transactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            editItem={editItem}
          />
        ))
      )}

    </div>
  );
}

export default TransactionList;