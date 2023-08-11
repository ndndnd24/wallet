import React, { useState } from "react";

function SpendingForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("USD");

  return (
    <form className="form-container">
      <input
        type="text"
        placeholder="Description"
        value={description}
        className="description-container input-text-container"
      />
      <input
        type="number"
        placeholder="0"
        value={amount}
        className="amount-container input-text-container"
      />
      <select value={currency} className="currency-container">
        <option value="HUF">HUF</option>
        <option value="USD">USD</option>
      </select>
      <button type="submit" className="save-button-container button-container">
        Save
      </button>
    </form>
  );
}

export default SpendingForm;
