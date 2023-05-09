import { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const SummarizeForm = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [modalError, setModalError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setErrorMessage('Please enter the text to be summarized.');
      return;
    }

    setErrorMessage('');
    setLoading(true);
    setOpen(true);

    try {
      const response = await axios.post('/api/summarize', { text });
      setSummary(response.data.summary);
      setModalError(false);
    } catch (error) {
      console.error('Error while fetching summary:', error);
      setModalError(true);
    }

    setLoading(false);
  };

  const handleClear = () => {
    setText('');
    setSummary('');
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
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
          error={!!errorMessage}
          helperText={errorMessage}
          sx={{ width: '90%' }} // Set the width of the TextField component to 75%
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
      </form>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Summary</DialogTitle>
        <DialogContent>
          {modalError ? (
            <Typography variant="body1" color="error">
              An error occurred. Please add correctly formatted text.
            </Typography>
          ) : loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Typography variant="body1">{summary}</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClear} color="primary">
            Clear
          </Button>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SummarizeForm;
