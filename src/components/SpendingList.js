import React from "react";

function SpendingList({ spendings }) {
  function readableTime(inputDate) {
    const date = new Date(inputDate);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    };

    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  }

  return (
    <ul className="spendings-container">
      {spendings.map((spending) => (
        <li key={spending.id} className="spending-list-item-container">
          <div className="spending-left-side-container">
            <div className="dollar-icon-container">
              <i className="fa-solid fa-dollar-sign dollar-icon"></i>
            </div>
            <div className="spending-date-and-description-container">
              <div className="spending-list-item-description">{spending.description}</div>
              <div>{readableTime(spending.spent_at)}</div>
            </div>
          </div>
          <div className="spending-right-side-container">
            <div className="spending-list-amount">
              {spending.amount} {spending.currency}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SpendingList;
