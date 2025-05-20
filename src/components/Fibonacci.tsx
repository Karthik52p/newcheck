import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Fibonacci: React.FC = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<number[]>([]);
  const navigate = useNavigate();

  const generateFibonacci = (n: number): number[] => {
    const sequence: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(number);
    if (isNaN(num) || num < 1) {
      alert('Please enter a valid positive number');
      return;
    }
    setResult(generateFibonacci(num));
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Fibonacci Sequence Generator
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="number"
            label="Enter a number"
            name="number"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Generate
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigate('/login')}
            sx={{ mb: 2 }}
          >
            Logout
          </Button>
        </Box>
        {result.length > 0 && (
          <Paper elevation={3} sx={{ p: 2, mt: 2, width: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Fibonacci Sequence:
            </Typography>
            <Typography>
              {result.join(', ')}
            </Typography>
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default Fibonacci; 