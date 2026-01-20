🚀 WeRecommend – AI-Powered Product Recommendation Assistant

WeRecommend is a full-stack AI-powered web application that helps users discover the best real-world products using natural language.
Instead of browsing endlessly, users simply describe what they need — and the AI does the rest.

✨ Project Overview

WeRecommend allows users to enter queries like:

“I want a flagship phone with a great camera under $1000”

The application uses Google Gemini AI (gemini-flash-latest) to:

Understand the user’s intent

Analyze constraints (budget, features, preferences)

Return 3–5 real, existing product recommendations

The results are presented in a clean, responsive card-based UI for a smooth user experience across devices.

🧠 How It Works

📝 User enters a natural language product query

🔄 Frontend sends the request to the backend API

🤖 Backend processes the prompt using Google Gemini AI

📦 AI responds with structured JSON data

🎨 Frontend renders recommendations in a responsive grid

🛠️ Tech Stack
Frontend

⚛️ React (Vite)

🎨 Custom CSS

🔗 Axios

🧩 Lucide React (icons)

Backend

🟢 Node.js

🚂 Express.js

🤖 Google Generative AI SDK (Gemini)

🔐 Dotenv

🌍 CORS

🌟 Features

🔍 Natural language product search

⚡ Real-time AI-powered recommendations

⏳ Loading animations during AI processing

📦 Structured JSON response handling

❌ Robust error handling for API failures

📱 Fully responsive (Mobile & Desktop)

📂 Project Structure
WeRecommend/
│
├── backend/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md

⚙️ Installation & Setup
✅ Prerequisites

Node.js (v18+ recommended)

Google Gemini API Key

🔧 Backend Setup

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Create a .env file and add:

GEMINI_API_KEY=your_key_here


Start the backend server:

node index.js


📌 Server runs on http://localhost:3000

🎨 Frontend Setup

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Start the development server:

npm run dev


📌 App runs on the default Vite port (usually http://localhost:5173
)

🔐 Environment Variables
Variable Name	Description
GEMINI_API_KEY	Google Gemini API Key
🚧 Error Handling

Graceful handling of AI/API failures

User-friendly error messages

Prevents UI crashes on malformed responses

🚀 Future Enhancements

⭐ Product rating & comparison

🛒 Direct purchase links

🧠 User preference memory

🌐 Deployment with Docker / Cloud

📜 License

This project is licensed under the MIT License.

🙌 Acknowledgements

Google Gemini AI

React & Vite

Lucide Icons
