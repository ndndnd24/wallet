import React, { useState, useEffect } from "react";
import "./App.css";
import { getSpendingList } from "./components/api";
import SpendingForm from "./components/SpendingForm";
import SpendingList from "./components/SpendingList";

function App() {
  const [spendings, setSpendings] = useState([]);
  const [currencyFilter, setCurrencyFilter] = useState("");
  const [order, setOrder] = useState("spent_at");

  const fetchSpendings = async () => {
    try {
      const spendingsData = await getSpendingList(currencyFilter, order);
      setSpendings(spendingsData);
    } catch (error) {
      console.error("Error fetching spendings:", error);
    }
  };

  useEffect(() => {
    fetchSpendings();
  }, [currencyFilter, order]);

  const handleSpendingCreated = (newSpending) => {
    setSpendings([newSpending, ...spendings]);
  };

  return (
    <div className="app-container">
      <div className="title-container">Spending Tracker</div>
      <SpendingForm onSpendingCreated={handleSpendingCreated} />
      <div className="filter-container">
        <div className="order-filter-container">
          <select
            value={order}
            className="sorting-container"
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="spent_at">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
          </select>
        </div>
        <div className="currency-filter-container">
          <button
            className={`filter-huf-button-container currency-button-container ${
              currencyFilter === "HUF" ? "active-currency-button" : ""
            }`}
            onClick={(e) => setCurrencyFilter("HUF")}
          >
            HUF
          </button>
          <button
            className={`filter-usd-button-container currency-button-container ${
              currencyFilter === "USD" ? "active-currency-button" : ""
            }`}
            onClick={() => setCurrencyFilter("USD")}
          >
            USD
          </button>
          <button
            className={`show-all-button-container currency-button-container ${
              currencyFilter === "" ? "active-currency-button" : ""
            }`}
            onClick={() => setCurrencyFilter("")}
          >
            All
          </button>
        </div>
      </div>
      <SpendingList spendings={spendings} />
    </div>
  );
}

export default App;
