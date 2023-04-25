import { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';

const PredictForm = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('/api/predict', { text });
    setResult(`Severity: ${response.data.severity}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Input Text"
          multiline
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Predict Severity
        </Button>
      </form>
      {result && <Typography variant="h6">{result}</Typography>}
    </div>
  );
};

export default PredictForm;
