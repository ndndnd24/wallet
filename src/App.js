import React from "react";
import "./App.css";
import SpendingForm from "./components/SpendingForm";

function App() {
  return (
    <div className="app-container">
      <div className="title-container">Spending Tracker</div>
      <SpendingForm />
    </div>
  );
}

export default App;
