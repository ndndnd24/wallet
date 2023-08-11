import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function SpendingForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');

  return (
    <form>
      <TextField
        label="Description"
        value={description}
        fullWidth
        className="description-container input-text-container"
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        fullWidth
        className="amount-container input-text-container"
      />
      <Select value={currency} className="currency-container">
        <MenuItem value="HUF">HUF</MenuItem>
        <MenuItem value="USD">USD</MenuItem>
      </Select>
      <Button variant="contained" color="primary" type="submit" className="save-button-cotnainer button-container">
        Save
      </Button>
    </form>
  );
};

export default SpendingForm;
