# 🚀 GitHub Profile Analyzer API

## 📌 Project Overview
The **GitHub Profile Analyzer API** is a backend service built using **Node.js, Express.js, and MySQL**. It fetches public GitHub user data, analyzes key profile insights, and stores them in a database.

This project integrates with the **GitHub Public REST API** to extract useful information and provides RESTful APIs to access stored insights.

---

## 🎯 Objective
- Fetch GitHub profile details using username
- Analyze useful insights
- Store analyzed data in MySQL
- Provide APIs to retrieve stored data

---

## 🧰 Tech Stack
- ⚡ Node.js  
- 🚀 Express.js  
- 🗄️ MySQL  
- 🌐 GitHub API  

---

## ✨ Features
- 🔍 Fetch GitHub profile by username
- 📊 Analyze data (repos, followers, etc.)
- 💾 Store insights in MySQL
- 📡 REST API endpoints
- ⚠️ Error handling for invalid users

---

## 📁 Project Structure

```bash
github-profile-analyzer/
│
├── src/
│   ├── config/         # Database configuration
│   ├── controllers/    # Request handlers
│   ├── routes/         # API routes
│   ├── services/       # GitHub API logic
│   ├── app.js
│   └── server.js
│
├── sql/
│   └── database.sql    # Database schema
│
├── .env
├── package.json
└── README.md


⚙️ Installation & Setup

1️⃣ Clone Repository
git clone https://github.com/your-username/github-profile-analyzer.git
cd github-profile-analyzer

2️⃣ Install Dependencies
npm install

3️⃣ Create .env File
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer
GITHUB_API_BASE=https://api.github.com

🛠️ Database Setup
Create database:
CREATE DATABASE github_analyzer;
``

Import schema:
source sql/database.sql;

▶️ Run Server
Development
npm run dev

Production
npm start

Server URL:
http://localhost:3000

🔗 API Endpoints
📌 Analyze GitHub Profile
POST /api/github/analyze/:username

📌 Get All Profiles
GET /api/github/profiles

📌 Get Profile by Username
GET /api/github/profiles/:username


📊 Database Schema
CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    name VARCHAR(255),
    bio TEXT,
    public_repos INT,
    followers INT,
    following INT,
    profile_url VARCHAR(255),
    created_at DATETIME,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


Show more lines

🚀 Deployment

🌐 Live API: https://your-deployed-url.com
📂 GitHub Repo: https://github.com/your-username/github-profile-analyzer
