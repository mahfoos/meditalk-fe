import { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, CircularProgress, Box, Paper } from '@mui/material';

const SummarizeForm = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/summarize', { text });
      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error while fetching summary:', error);
    }

    setLoading(false);
  };

  const handleClear = () => {
    setText('');
    setSummary('');
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
          variant="outlined"
          InputProps={{
            style: {
              backgroundColor: 'white',
              borderRadius: '5px',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          sx={{ marginTop: 2, marginRight: 1 }}
        >
          Summarize Text
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClear} disabled={loading} sx={{ marginTop: 2 }}>
          Clear
        </Button>
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <CircularProgress />
          </Box>
        )}
      </form>
      {summary && (
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6" component="div" gutterBottom>
            Summary:
          </Typography>
          <Paper elevation={1} sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1">
              {summary}
            </Typography>
          </Paper>
        </Box>
      )}
    </div>
  );
};

export default SummarizeForm;
