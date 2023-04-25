import axios from 'axios';

const predictAPI = "http://127.0.0.1:5000/predict"; // Replace with the actual URL of your backend API

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(predictAPI, req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while processing your request." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed. Please use POST." });
  }
}
