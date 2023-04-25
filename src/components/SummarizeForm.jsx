import { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';

const SummarizeForm = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('/api/summarize', { text });
    setSummary(response.data.summary);
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
          Summarize Text
        </Button>
      </form>
      {summary && (
        <Typography variant="h6">Summary: {summary}</Typography>
      )}
    </div>
  );
};

export default SummarizeForm;
