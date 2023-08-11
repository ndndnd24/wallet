import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders app title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Spending Tracker/i);
  expect(titleElement).toBeInTheDocument();
});

test('displays spending form', () => {
  const { getByPlaceholderText, getByDisplayValue, getByTestId  } = render(<App />);
  const descriptionInput = getByPlaceholderText('Description');
  const amountInput = getByPlaceholderText('0');
  const currencySelect = getByDisplayValue('USD');
  const saveButton = getByTestId('save-spending-button');

  expect(descriptionInput).toBeInTheDocument();
  expect(amountInput).toBeInTheDocument();
  expect(currencySelect).toBeInTheDocument();
  expect(saveButton).toBeInTheDocument();
});

test('changes currency filter on button click', () => {
  const { getByText, getByTestId } = render(<App />);
  const filterHufButton = getByTestId('filter-huf-button');

  expect(filterHufButton.classList.contains('active-currency-button')).toBe(false);

  // Simulate a click to set the currency filter
  fireEvent.click(filterHufButton);

  // Now the class should be present
  expect(filterHufButton.classList.contains('active-currency-button')).toBe(true);
});
