import React, { useState } from "react";
import "./App.css";
import SpendingForm from "./components/SpendingForm";

function App() {
  const [order, setOrder] = useState("");

  return (
    <div className="app-container">
      <div className="title-container">Spending Tracker</div>
      <SpendingForm />
      <div className="filter-container">
        <div className="order-filter-container">
          <select value={order} className="sorting-container">
            <option value="date-desc">Sort by Date descending</option>
            <option value="date-asc">Sort by Date ascending</option>
            <option value="amount-desc">Sort by Amount descending</option>
            <option value="amount-asc">Sort by Amount ascending</option>
          </select>
        </div>
        <div className="currency-filter-container">
          <button className="filter-huf-button-container currency-button-container">
            HUF
          </button>
          <button className="filter-usd-button-container currency-button-container">
            USD
          </button>
          <button className="show-all-button-container currency-button-container active-currency-button">
            All
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
