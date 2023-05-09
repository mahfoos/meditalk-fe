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

const PredictForm = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [loadingText, setLoadingText] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [modalErrorMessage, setModalErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setErrorMessage('Please enter the text to be predict the severity.');
      return;
    }

    setErrorMessage('');
    setLoading(true);
    setLoadingText(true);

    try {
      const response = await axios.post('/api/predict', { text });
      setTimeout(() => {
        setResult(`Severity: ${response.data.severity}`);
        setLoadingText(false);
        setModalErrorMessage('');
      }, 3000); // Add a 3-second delay
    } catch (error) {
      console.error('Error while fetching prediction:', error);
      setLoadingText(false);
      if (error.response && error.response.status === 500) {
        setModalErrorMessage('Please enter summarized text.');
      } else {
        setModalErrorMessage('An error occurred while processing your request.');
      }
    }

    setLoading(false);
    setOpen(true);
  };

  const handleClear = () => {
    setText('');
    setResult('');
    setErrorMessage('');
    setModalErrorMessage('');
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const severityColor = () => {
    if (result.includes('Low Severity')) {
      return 'green';
    } else if (result.includes('Medium Severity')) {
      return 'orange';
    } else if (result.includes('High Severity')) {
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
          error={!!errorMessage}
          helperText={errorMessage}
        />
        <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ marginRight: 1 }}>
          Predict Severity
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClear} disabled={loading}>
          Clear
        </Button>
      </form>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Predicted Severity</DialogTitle>
        <DialogContent>
          {loadingText ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
          ) : modalErrorMessage ? (
            <Typography variant="body1" sx={{ color: 'red' }}>
              {modalErrorMessage}
            </Typography>
          ) : (
            <Typography variant="body1" sx={{ color: severityColor() }}>
              {result}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClear}></Button>
          <Button onClick={handleClose} color="secondary">
          Close
        </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PredictForm;
