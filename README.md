# 🚀 GitHub Profile Analyzer API

> A scalable backend service built with Node.js that fetches, analyzes, and stores GitHub user profile data using a cloud-hosted MySQL database.

---

## 🌐 Live Demo

🔗 **API Base URL:**  
https://github-profile-analyzer-api-2ug6.onrender.com

---

## 📌 Project Overview

The **GitHub Profile Analyzer API** is a backend application that integrates with the **GitHub Public REST API** to fetch user profile data, extract valuable insights, and store them in a **cloud-hosted MySQL database (Aiven)**.

This project demonstrates:
- API integration
- Backend development using Express.js
- Cloud database management
- RESTful API design

---

## 🎯 Objective

- Fetch public GitHub profile data using a username  
- Analyze useful metrics (followers, repos, etc.)  
- Store analyzed data in MySQL  
- Provide APIs to retrieve stored results  

---

## 🧰 Tech Stack

- ⚡ Node.js  
- 🚀 Express.js  
- 🗄️ MySQL (Aiven Cloud Database)  
- 🌐 GitHub REST API  
- ☁️ Render (Deployment Platform)  

---

## ✨ Features

- 🔍 Fetch GitHub profile by username  
- 📊 Analyze key insights:
  - Public repositories count  
  - Followers & Following  
  - Profile details (name, bio, URL)  
- 💾 Store data in cloud database  
- 📡 REST APIs for data retrieval  
- ⚠️ Error handling (invalid users, API errors)  

---

## 📁 Project Structure

```bash
github-profile-analyzer/
│
├── src/
│   ├── db/         # Database connection setup
│   ├── controllers/    # Business logic
│   ├── routes/         # API routes
│   ├── app.js
│
├── .env
├── package.json
└── README.md

```
---

## ⚙️ Environment Variables
Create a .env file:
```sh

DB_HOST=your-aiven-host
DB_PORT=your-port
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=defaultdb

GITHUB_API_BASE=https://api.github.com
```
---

## ☁️ Database (Aiven MySQL)
This project uses Aiven Cloud MySQL instead of a local database.<br>
✅ Benefits:
<br>

🌍 Cloud-hosted (accessible anywhere) <br>
🔒 Secure (SSL support) <br>
⚡ High availability

---

## 🛠️ Database Schema
```bash
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
```
---

## 🔗 API Endpoints
1️⃣ Analyze GitHub Profile

```shell

POST /api/analyze/:username
```

✅ Example Request

```shell

curl -X POST https://github-profile-analyzer-api-2ug6.onrender.com/api/analyze/octocat
```

2️⃣ Get All Profiles
```shell

GET /api/profiles
curl https://github-profile-analyzer-api-2ug6.onrender.com/api/profiles
```

3️⃣ Get Profile by Username
```shell

GET /api/profiles/:username
curl https://github-profile-analyzer-api-2ug6.onrender.com/api/profiles/octocat
```

📊 Sample Response
```bash
{
  "username": "octocat",
  "name": "The Octocat",
  "bio": "GitHub mascot",
  "public_repos": 8,
  "followers": 5000,
  "following": 9,
  "profile_url": "https://github.com/octocat"
}
```
---
## ▶️ Run Locally

1️⃣ Clone Repository
```bash
git clone https://github.com/jaysantosh/github-profile-analyzer-api.git
cd github-profile-analyzer-api
```

2️⃣ Install Dependencies
```bash
npm install
```

3️⃣ Start Server

```bash
npm run dev
```

or 
```bash
npm start
```
---

## 🚀 Deployment <br>
✅ Deployed on Render <br>
🔗 https://github-profile-analyzer-api-2ug6.onrender.com

---
## 🧪 Testing

Tested using Postman <br>
You can also test using curl or browser for GET APIs

