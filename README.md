# 🚀 GitHub Profile Analyzer API

> A scalable backend service built with Node.js that fetches, analyzes, and stores GitHub user profile data using a cloud-hosted MySQL database.

---

## 🌐 Live Demo

🔗 **API Base URL:**  
https://your-render-url.onrender.com  

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
│   ├── config/         # Database connection setup
│   ├── controllers/    # Business logic
│   ├── routes/         # API routes
│   ├── services/       # GitHub API calls
│   ├── app.js
│   └── server.js
│
├── sql/
│   └── database.sql    # Database schema
│
├── .env
├── package.json
└── README.md
