import React from 'react';
import { render } from '@testing-library/react';
import SpendingList from '../components/SpendingList';

test('should render spending list', () => {
  const spendings = [
    { id: 1, description: 'Item 1', amount: 100, currency: 'USD' },
    { id: 2, description: 'Item 2', amount: 200, currency: 'HUF' },
  ];

  const { getByText } = render(<SpendingList spendings={spendings} />);

  expect(getByText('Item 1')).toBeInTheDocument();
  expect(getByText('Item 2')).toBeInTheDocument();
});
