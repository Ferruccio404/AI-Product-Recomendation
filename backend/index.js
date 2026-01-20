const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});




// AI Client Setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);



app.post('/api/recommend', async (req, res) => {
  try {
    const { preferences } = req.body;

    if (!preferences) {
      return res.status(400).json({ error: "Preferences are required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `
      You are an expert product recommendation assistant.
      The user is asking for: "${preferences}"

      Task:
      Generate a list of 3-5 REAL, existing products that best match this request. 
      You are NOT limited to any specific inventory. You can recommend anything (electronics, clothes, home goods, etc.).
      
      Return the data as a strictly valid JSON array of objects.
      Each object must have:
      - id: dynamic unique number
      - name: product name
      - category: short category name
      - price: estimated price in USD (number)
      - description: brief catchy description
      
      Example format:
      [
        { "id": 101, "name": "Classic White Tee", "category": "Apparel", "price": 25, "description": "Soft cotton essential t-shirt." }
      ]

      Return ONLY the JSON. No markdown formatting.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();



    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();

    let recommendations = [];
    try {
      recommendations = JSON.parse(cleanText);
    } catch (e) {
      console.error("Failed to parse Gemini response:", e);
      return res.status(500).json({ error: "Failed to process AI recommendations" });
    }

    res.json({ recommendations });

  } catch (error) {
    console.error("Error generating recommendations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
