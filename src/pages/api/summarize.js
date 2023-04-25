import axios from 'axios';

const summarizeAPI = "http://127.0.0.1:5000/summarize"; 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(summarizeAPI, req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while processing your request." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed. Please use POST." });
  }
}
