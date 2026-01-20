# 🤖 WeRecommend

AI-powered product recommendation assistant that understands natural language and suggests real-world products.

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![AI](https://img.shields.io/badge/AI-Google%20Gemini-orange)
![License](https://img.shields.io/badge/License-MIT-purple)

---

## 🚀 About the Project

**WeRecommend** is a full-stack AI-powered web application that helps users find the best products using natural language.

Instead of manually searching across websites, users simply describe what they want, for example:

> *"I want a flagship phone with a great camera under $1000"*

The app analyzes the request using **Google Gemini AI** and returns **3–5 real, relevant product recommendations** in a clean, responsive UI.

---

## 🧠 How It Works

1. User enters a natural language query  
2. Frontend sends the request to the backend API  
3. Backend processes the prompt using **Google Gemini (gemini-flash-latest)**  
4. AI returns structured JSON recommendations  
5. Frontend displays results in a responsive card grid  

---

## ✨ Features

- 🔍 Natural language product search  
- 🤖 AI-powered real-time recommendations  
- 📦 Structured JSON response handling  
- ⏳ Loading animations while processing  
- ❌ Graceful error handling for API failures  
- 📱 Fully responsive (mobile & desktop)  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Custom CSS


### Backend
- Node.js
- Express.js
- Google Generative AI SDK
- Dotenv
  
---

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed
- Google Gemini API Key

### Backend Setup

```bash
cd backend
npm install

Create a .env file:
GEMINI_API_KEY=your_key_here
Start the backend server:
node index.js

**Frontend Setup**
cd frontend
npm install
npm run dev


