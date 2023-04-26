import { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, CircularProgress, Box, Paper } from '@mui/material';

const PredictForm = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/predict', { text });
      setResult(`Severity: ${response.data.severity}`);
    } catch (error) {
      console.error('Error while fetching prediction:', error);
    }

    setLoading(false);
  };

  const handleClear = () => {
    setText('');
    setResult('');
  };

  const severityColor = () => {
    if (result.includes('low severity')) {
      return 'green';
    } else if (result.includes('medium severity')) {
      return 'orange';
    } else if (result.includes('high severity')) {
      return 'red';
    } else {
      return 'inherit';
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Input Text"
          multiline
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ marginRight: 1 }}>
          Predict Severity
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClear} disabled={loading}>
          Clear
        </Button>
      </form>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <CircularProgress />
        </Box>
      )}
      {result && (
        <Paper elevation={1} sx={{ padding: 2, marginTop: 3, backgroundColor: severityColor() }}>
          <Typography variant="h6">{result}</Typography>
        </Paper>
      )}
      
    </>
  );
};

export default PredictForm;
