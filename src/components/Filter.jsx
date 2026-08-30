import "../styles/Filter.css";

function Filter({ filter, setFilter }) {
  return (
    <div className="filter">

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

    </div>
  );
}

export default Filter;