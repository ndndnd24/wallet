import React, { useState } from "react";
import { createSpending } from "./api";

function SpendingForm({ onSpendingCreated }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [descriptionError, setDescriptionError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || !amount) {
      if (!description) {
        setDescriptionError(true);
      }
      if (!amount) {
        setAmountError(true);
      }
      return;
    }

    try {
      const spendingData = {
        description,
        amount: parseFloat(amount),
        currency,
        spent_at: new Date().toISOString(),
      };

      const newSpending = await createSpending(spendingData);
      onSpendingCreated(newSpending);

      setDescription("");
      setAmount("");
      setDescriptionError(false);
      setAmountError(false);
    } catch (error) {
      console.error("Error creating spending:", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        className={`description-container input-text-container ${
          descriptionError ? "input-error" : ""
        }`}
        onChange={(e) => {
          setDescription(e.target.value);
          setDescriptionError(false);
        }}
      />
      {descriptionError && <div className="error-message">Description is empty</div>}
      <input
        type="number"
        placeholder="0"
        value={amount}
        className={`amount-container input-text-container ${
          amountError ? "input-error" : ""
        }`}
        onChange={(e) => {
          setAmount(e.target.value);
          setAmountError(false);
        }}
      />
      {amountError && <div className="error-message">Amount is empty</div>}
      <select
        value={currency}
        className="currency-container"
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="HUF">HUF</option>
        <option value="USD">USD</option>
      </select>
      <button type="submit" className="save-button-container button-container" data-testid="save-spending-button">
        Save
      </button>
    </form>
  );
}

export default SpendingForm;
