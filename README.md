📌 **Overview**
WeRecommend is a full-stack AI-powered web application that helps users find real-world product recommendations using natural language. Users describe what they are looking for, and the app returns 3–5 relevant, existing products using Google Gemini AI.
Example query:
"I want a flagship phone with a great camera under $1000"

🧠 **How It Works**
->User enters a natural language query
->Frontend sends the request to the backend API
->Backend processes the prompt using Google Gemini (gemini-flash-latest)
->AI returns structured JSON data
->Frontend displays results in a responsive card grid

🛠️ **Tech Stack**
Frontend: React (Vite), CSS (Custom), Axios, Lucide React
Backend: Node.js, Express.js, Google Generative AI SDK, Dotenv, CORS

📂 **Project Structure**
WeRecommend/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── README.md

Installation & Setup
Prerequisites
Node.js installed
Google Gemini API Key

**Backend Setup**
cd backend
npm install
Create a .env file-GEMINI_API_KEY=your_key_here
Start the backend server:node index.js
http://localhost:3000-Server runs on

**Frontend Setup**
cd frontend
npm install
npm run dev

