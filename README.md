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
<img width="334" height="259" alt="Screenshot 2026-01-20 at 6 19 38 PM" src="https://github.com/user-attachments/assets/95129e53-421a-4e5b-8994-4925f3abf256" />


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

