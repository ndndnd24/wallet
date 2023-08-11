import React from 'react';
import './App.css';
import SpendingForm from './components/SpendingForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Container className="app-container">
      <Typography variant="h4" align="center" gutterBottom>
        Spending Tracker
      </Typography>
      <SpendingForm/>
    </Container>
  );
}

export default App;