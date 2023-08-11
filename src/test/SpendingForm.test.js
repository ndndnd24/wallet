import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SpendingForm from "../components/SpendingForm";

test("should submit spending form", async () => {
  const handleSpendingCreated = jest.fn();
  const { getByPlaceholderText, getByDisplayValue, getByTestId } = render(
    <SpendingForm onSpendingCreated={handleSpendingCreated} />
  );

  const descriptionInput = getByPlaceholderText("Description");
  const amountInput = getByPlaceholderText("0");
  const currencySelect = getByDisplayValue("USD");
  const saveButton = getByTestId('save-spending-button');

  fireEvent.change(descriptionInput, { target: { value: "Test Description" } });
  fireEvent.change(amountInput, { target: { value: "100" } });
  fireEvent.change(currencySelect, { target: { value: "USD" } });

  fireEvent.click(saveButton);

  await waitFor(() => {
    expect(handleSpendingCreated).toHaveBeenCalled();
  });
});
