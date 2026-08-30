import "../styles/Analytics.css";

function Analytics() {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const incomeTransactions = transactions.filter(
    (item) => item.type === "Income"
  );

  const expenseTransactions = transactions.filter(
    (item) => item.type === "Expense"
  );

  const totalIncome = incomeTransactions.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const totalExpense = expenseTransactions.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const balance = totalIncome - totalExpense;

  const highestIncome =
    incomeTransactions.length > 0
      ? Math.max(...incomeTransactions.map((item) => item.amount))
      : 0;

  const highestExpense =
    expenseTransactions.length > 0
      ? Math.max(...expenseTransactions.map((item) => item.amount))
      : 0;

  const total = totalIncome + totalExpense;

  const incomePercentage =
    total === 0 ? 0 : ((totalIncome / total) * 100).toFixed(1);

  const expensePercentage =
    total === 0 ? 0 : ((totalExpense / total) * 100).toFixed(1);

  return (
    <div className="analytics">

      <h1>Analytics</h1>

      <div className="analytics-cards">

        <div className="analytics-card">
          <h3>Total Transactions</h3>
          <h2>{transactions.length}</h2>
        </div>

        <div className="analytics-card income-card">
          <h3>Total Income</h3>
          <h2>₹{totalIncome}</h2>
        </div>

        <div className="analytics-card expense-card">
          <h3>Total Expense</h3>
          <h2>₹{totalExpense}</h2>
        </div>

        <div className="analytics-card balance-card">
          <h3>Current Balance</h3>
          <h2>₹{balance}</h2>
        </div>

      </div>

      <div className="summary">

        <div className="summary-box">
          <h3>Highest Income</h3>
          <p>₹{highestIncome}</p>
        </div>

        <div className="summary-box">
          <h3>Highest Expense</h3>
          <p>₹{highestExpense}</p>
        </div>

        <div className="summary-box">
          <h3>Income %</h3>
          <p>{incomePercentage}%</p>
        </div>

        <div className="summary-box">
          <h3>Expense %</h3>
          <p>{expensePercentage}%</p>
        </div>

      </div>

      <div className="recent">

        <h2>Recent Transactions</h2>

        {transactions.length === 0 ? (
          <p>No Transactions Found</p>
        ) : (
          <table>

            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>

              {transactions.slice(-5).reverse().map((item) => (

                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.type}</td>
                  <td>₹{item.amount}</td>
                </tr>

              ))}

            </tbody>

          </table>
        )}

      </div>

    </div>
  );
}

export default Analytics;